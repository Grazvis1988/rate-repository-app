import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { RepositoriesTab, SignInTab, SignOut } from './AppBarTab';
import useUser from '../hooks/useUser';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBarBackgroundColor,
		paddingLeft: 7, 
		paddingBottom: 10,
	},
// ...
});

const AppBar = () => {
	// I'm passing "setUser" to SignOut tab because otherwise 
	// I need to push tab two time in order to for the state of user to change in "useUser"
	const [ user, setUser ] = useUser(); 

	return ( 
		<View style={styles.container}>
			<ScrollView horizontal={true} >
				{ 
					!user ?
						<SignInTab />
					:
					<>	
						<RepositoriesTab />
						<SignOut setUser={setUser}/> 
					</>
				}
			</ScrollView>
		</View>
	);
};

export default AppBar;
