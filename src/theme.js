import { Platform } from 'react-native';

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		primary: '#0366d6',
		appBarBackgroundColor: '#24292e', 
		whiteText: '#ffffff',
    mainBackground: '#e1e4e8',
    dangerousBackground: '#CF2B2B'
	},
	fontSizes: {
		body: 15,
		subheading: 17,
	},
	fonts: {
		main: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'System'
		})
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
};

export default theme;
