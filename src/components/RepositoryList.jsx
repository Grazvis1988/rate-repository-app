import React, { useState, useEffect }  from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import RepositoriesMeniu from './RepositoriesMeniu'


const styles = StyleSheet.create({
	separator: {
		height: 2,
	},
});


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setOrdering, ordering }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    const navigate = useNavigate();

    return (
		<FlatList
			data={repositoryNodes}
      ListHeaderComponent={<RepositoriesMeniu setOrdering={setOrdering} ordering={ordering} />}
			ItemSeparatorComponent={ItemSeparator}
        renderItem={ ({ item }) => (
            <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
                <RepositoryItem item={item} />
            </Pressable>
        ) }
			keyExtractor={item => item.id}
		/>
	);
};

const RepositoryList = () => {
  const [ ordering, setOrdering ] = useState('latest')


  const orderBy = ordering === "lowest" || ordering === "highest" 
    ? 'RATING_AVERAGE'
    : 'CREATED_AT'

  const orderDirection = ordering === 'lowest' ? 'ASC' : 'DESC'

  const variables = {
    orderBy,
    orderDirection
  }

  const { repositories, refetch } = useRepositories(variables);

  useEffect(() => {
      ( async () => {
      try {
        await refetch()
    } catch (e) {
      console.log('Failed to refetch: ', e.message)
    }}
      )()
  }, [ordering])
    

  return (
    <RepositoryListContainer 
      repositories={repositories} 
      setOrdering={setOrdering}
      ordering={ordering}
    />
  )
};

export default RepositoryList;
