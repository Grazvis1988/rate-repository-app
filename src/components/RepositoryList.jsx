import React  from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
	separator: {
		height: 2,
	},
});


const ItemSeparator = () => <View style={styles.separator} />;

/*
const renderItem = ({ item }) => {

    return (
        <Pressable onPress={() => {
            navigate(`/repository/${item.id}`)
        }}>
            <RepositoryItem item={item} />
        </Pressable>
    )
};
*/

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    const navigate = useNavigate();

    return (
		<FlatList
			data={repositoryNodes}
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

    const { repositories } = useRepositories();

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
