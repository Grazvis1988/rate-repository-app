import React from 'react';
//import Constants from 'expo-constants';
import { Route, Routes, Navigate } from 'react-router-native';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import SingleRepositoryItem from './SingleRepositoryItem';


const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: '#e1e4e8'
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
		<AppBar />
		<Routes>
			<Route path="/sign-in" element={<SignIn />} exact />
            <Route path="/repositories/:id" element={<SingleRepositoryItem />} exact />
			<Route path="/" element={<RepositoryList />} exact />
			<Route path="*" element={<Navigate to="/sign-in" replace />} />
		</Routes>
		</View>
	);
};

export default Main;
