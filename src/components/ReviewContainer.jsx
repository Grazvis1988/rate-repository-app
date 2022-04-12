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
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required("Repository name is required!").lowercase().trim(),
  ownerName: yup.string().required("Repository owner name is required!").lowercase().trim(),
  rating: yup.number().integer().min(0).max(100).required("Rating is required!"),
  text: yup.string().max(2000).trim(),
});


const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
      <FormikTextInput name="text" placeholder="Review" multiline={true}/>
      <Pressable style={styles.submitButton} onPress={onSubmit}>
		<Text style={styles.signInButtonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

const ReviewContainer = ({ onSubmit }) => (
		<Formik 
			initialValues={initialValues} 
			onSubmit={onSubmit} 
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
		</Formik>
)

export default ReviewContainer;
