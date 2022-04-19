import React from 'react';
import Text from './Text';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import * as yup from 'yup';

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
		justifyContent: 'center',
		alignItems: 'center',
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
  passwordConfiramtion: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required("Username is required!").lowercase().trim(),
  password: yup.string().min(5).max(50).required("Password is required!"),
  passwordConfiramtion: yup.string().oneOf([yup.ref('password'), null]).required("Passwords don't match!")
});


const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
      <FormikTextInput name="passwordConfiramtion" placeholder="Password confirmation" secureTextEntry={true}/>
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.signInButtonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const SignUpContainer = ({ onSubmit }) => (
		<Formik 
			initialValues={initialValues} 
			onSubmit={onSubmit} 
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
		</Formik>
)

export default SignUpContainer;
