import React from 'react';
import Text from './Text';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import  useSignIn  from '../hooks/useSignIn';

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
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required!'),
	password: yup
		.string()
		.required('Password is required!'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
      <Pressable style={styles.submitButton} onPress={onSubmit}>
		<Text style={styles.signInButtonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};


const SignIn = () => {
	const [ signIn ] = useSignIn();

	const onSubmit = async (values) => {

		const { username, password } = values;

		if (values.username && values.password) {
			console.log(values);
		}

		try {
			const { data } = await signIn({ username, password });
			console.log(data);
		} catch (e) {
			console.log(e);
		}

	};

	return (
		<Formik 
			initialValues={initialValues} 
			onSubmit={onSubmit} 
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};


export default SignIn;
