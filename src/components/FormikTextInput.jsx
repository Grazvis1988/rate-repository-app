import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
	errorText: {
		marginBottom: 7,
		marginLeft: "8%",
		color: "#d73a4a",
		alignSelf: "flex-start"
	},
	textInput: {
		height: 40,
		margin: 12,
		width: '90%',
		borderRadius: 4,
		padding: 10,
		paddingBottom: 4,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#b2b2b2',
		alignItems: 'center',
	}
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
		style={styles.textInput}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
