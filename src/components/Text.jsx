import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.normal,
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	blueBackground: {
		backgroundColor: theme.colors.primary
	},
  redBackground: {
    backgroundColor: theme.colors.dangerousBackground
  },
	colorAppBarText: {
		color: theme.colors.appBarBackgroundColor,
	},
	whiteText: {
		color: theme.colors.whiteText,
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold,
	},
});

const Text = ({ backGround, color, fontSize, fontWeight, style, ...props }) => {
const textStyle = [
	styles.text,
	color === 'textSecondary' && styles.colorTextSecondary,
	color === 'primary' && styles.colorPrimary,
	color === 'whiteText' && styles.whiteText,
	backGround === 'primary' && styles.blueBackground,
  backGround === 'danger' && styles.redBackground,
	fontSize === 'subheading' && styles.fontSizeSubheading,
	fontWeight === 'bold' && styles.fontWeightBold,
	style,
];

return <NativeText style={textStyle} {...props} />;
};

export default Text;
