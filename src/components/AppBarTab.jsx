import React from 'react'; 
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
const styles = StyleSheet.create({
	tab: {
		padding: 2,
		marginRight: 3,
	}
});


const AppBarTab = () => {
	return (
		<Pressable onPress={() => console.log("Pressed respositories tab")} style={styles.tab}>
			<Link to="/"><Text color='whiteText' fontSize='subheading' fontWeight ='bold'>Repositories</Text></Link>
		</Pressable>	
	);
};

export const SignInTab = () => {
	return (
		<Pressable onPress={() => console.log("Pressed Sign In Tab")} style={styles.tab}>
			<Link to="/sign-in"><Text color='whiteText' fontSize='subheading' fontWeight ='bold'>Sign In</Text></Link>
		</Pressable>	
	);
};

export default AppBarTab;
