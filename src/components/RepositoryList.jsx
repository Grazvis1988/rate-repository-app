import React, { useState, useEffect }  from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import RepositoriesMeniu from './RepositoriesMeniu';
import SearchField from './SearchField';
import { useDebounce } from 'use-debounce';


const styles = StyleSheet.create({
	separator: {
		height: 2,
	},
});


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ 
  repositories, 
  onEndReach,
  setOrdering, 
  ordering, 
  searchFieldValue, 
  setSearchFieldValue 
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    const navigate = useNavigate();

    return (
		<FlatList
			data={repositoryNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
      <>
        <SearchField 
          searchFieldValue={searchFieldValue} 
          setSearchFieldValue={setSearchFieldValue} 
        />
        <RepositoriesMeniu setOrdering={setOrdering} ordering={ordering} />
      </>}
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
  const [ searchKeyword, setSearchKeyword ] = useState('')
  const [ value ] = useDebounce(searchKeyword, 500)


  const orderBy = ordering === "lowest" || ordering === "highest" 
    ? 'RATING_AVERAGE'
    : 'CREATED_AT'

  const orderDirection = ordering === 'lowest' ? 'ASC' : 'DESC'

  const variables = {
    orderBy,
    orderDirection,
    searchKeyword: value,
    first: 8,
  }

  const { repositories, fetchMore, refetch } = useRepositories(variables);

  const onEndReach = () => {
    fetchMore();
  }

  useEffect(() => {
      ( async () => {
      try {
        await refetch()
    } catch (e) {
      console.log('Failed to refetch: ', e.message)
    }}
      )()
  }, [ordering, value])
    

  return (
    <RepositoryListContainer 
      repositories={repositories} 
      onEndReach={onEndReach}
      setOrdering={setOrdering}
      ordering={ordering}
      searchFieldValue={searchKeyword}
      setSearchFieldValue={setSearchKeyword}
    />
  )
};

export default RepositoryList;
