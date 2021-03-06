import React from 'react';
import { Route, Routes, Navigate } from 'react-router-native';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppBar from './AppBar';
import SingleRepositoryItem from './SingleRepositoryItem';
import CreateReview from './CreateReview';
import Reviews from './Reviews';
import useUser from '../hooks/useUser';


const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: '#e1e4e8'
	},
});

const Main = () => {
	const { user } = useUser(); 

	return (
		<View style={styles.container}>
		<AppBar user={user} />
		<Routes>
			<Route path="/sign-in" element={<SignIn />} exact />
			<Route path="/sign-up" element={<SignUp />} exact />
      <Route path="/repositories/:id" element={<SingleRepositoryItem />} exact />
      <Route path="/create-review" element={<CreateReview />} exact/>
      <Route path="/my-reviews" element={<Reviews />} exact/>
      <Route path="/" element={
        !user ?
          <SignIn />
        :
          <RepositoryList />
      } exact />
			<Route path="*" element={<Navigate to="/sign-in" replace />} />
		</Routes>
		</View>
	);
};

export default Main;
