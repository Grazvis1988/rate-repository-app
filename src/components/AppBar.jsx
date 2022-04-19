import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { RepositoriesTab, SignInTab, SignOut, ReviewTab, SignUpTab } from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBarBackgroundColor,
		paddingLeft: 7, 
		paddingBottom: 10,
	},
// ...
});

const AppBar = ({ user, setUser }) => {

	return ( 
		<View style={styles.container}>
			<ScrollView horizontal={true} >
				{ 
					!user ?
            <>
              <SignInTab />
              <SignUpTab />
            </>
					:
					<>	
						<RepositoriesTab />
            <ReviewTab />
						<SignOut setUser={setUser}/> 
					</>
				}
			</ScrollView>
		</View>
	);
};

export default AppBar;
