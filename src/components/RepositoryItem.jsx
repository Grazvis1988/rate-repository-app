import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
	item: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		fontSize: 20
	}
});

const RepositoryItem = ({ item }) => (
	<View style={styles.item}>
		<Text>Full name: {item.fullName}</Text>
		<Text>Description: ${item.description}</Text>
		<Text>Language: ${item.language}</Text>
		<Text>Stars: ${item.stargazersCount}</Text>
		<Text>Forks: ${item.forksCount}</Text>
		<Text>Reviews: ${item.reviewCount}</Text>
		<Text>Rating: ${item.ratingAverage}</Text>
	</View>
);

export default RepositoryItem;
