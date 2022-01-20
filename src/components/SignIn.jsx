import React from 'react';
import Text from './Text';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
	submitButton: {
		backgroundColor: theme.colors.primary,
		height: 40,
		margin: 12,
		width: '90%',
		borderRadius: 4,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		backgroundColor: '#ffffff',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	textInput: {
		height: 40,
		margin: 12,
		width: '90%',
		borderRadius: 4,
		padding: 10,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#b2b2b2'
	},
	signInButtonText: {
		color: theme.colors.whiteText,
		fontSize: 18,
		fontWeight: theme.fontWeights.bold
	}
});


const initialValues = {
	username: '',
	password: '',
};


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.textInput} name="username" placeholder="Username" />
      <FormikTextInput style={styles.textInput} name="password" placeholder="Password" secureTextEntry={true}/>
      <Pressable style={styles.submitButton} onPress={onSubmit}>
		<Text style={styles.signInButtonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};


const SignIn = () => {
  const onSubmit = values => {

    if (values.username && values.password) {
      console.log(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


export default SignIn;
