import React from 'react'; 
import { Pressable, StyleSheet } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import Text from './Text';

import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
	tab: {
		padding: 2,
		marginRight: 3,
		backgroundColor: 'red',
		flexWrap: 'wrap'
	}
});


export const RepositoriesTab = () => {
	return (
		<Pressable onPress={() => console.log("Pressed respositories tab")} style={styles.tab}>
			<Link to="/"><Text color='whiteText' fontSize='subheading' fontWeight ='bold'>Repositories</Text></Link>
		</Pressable>	
	);
};

export const SignInTab = () => {
	return (
		<Pressable onPress={() => console.log("Pressed Sign In Tab")} style={styles.tab}>
			<Link to="/sign-in" replace component={Pressable}><Text color='whiteText' fontSize='subheading' fontWeight ='bold'>Sign In</Text></Link>
		</Pressable>	
	);
};

export const SignOut = ({ setUser }) => {
	const navigate = useNavigate();
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const signingOut = async () => {
		navigate("sign-in", { replace: true });
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
		setUser(null); 
	};
	return (
		<Pressable onPress={ () => signingOut()} style={styles.tab}>
			<Text color='whiteText' fontSize='subheading' fontWeight ='bold'>Sign Out</Text>
		</Pressable>	
	);
};

