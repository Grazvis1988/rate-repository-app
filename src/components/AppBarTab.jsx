import React from 'react'; 
import { Pressable } from 'react-native';
import Text from './Text';


const AppBarTab = () => {
	return (
		<Pressable onPress={() => console.log("Pressed")}>
			<Text color='whiteText' fontSize='subheading' fontWeight ='bold'>Repositories</Text>
		</Pressable>	
	);
};

export default AppBarTab;
