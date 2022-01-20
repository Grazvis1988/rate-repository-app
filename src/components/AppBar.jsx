import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab, { SignInTab } from './AppBarTab';
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
	return ( 
		<View style={styles.container}>
			<ScrollView horizontal={true} >
				<AppBarTab />
				<SignInTab />
			</ScrollView>
		</View>
	);
};

export default AppBar;
