import React  from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
	separator: {
		height: 2,
	},
});


const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
	<RepositoryItem item={item} />
);

const RepositoryList = () => {
	const { repositories } = useRepositories();

	// Get the nodes from the edges array
	const repositoryNodes = repositories
	? repositories.edges.map(edge => edge.node)
	: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={renderItem}
			keyExtractor={item => item.id}
		/>
	);
};

export default RepositoryList;
