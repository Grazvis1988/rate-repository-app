import React from 'react'
import { StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
	container: {
    margin: 10,
	},
});


const RepositoriesMeniu = ({ setOrdering, ordering }) => {
  return (
    <Picker
      style={styles.container}
      selectedValue={ordering}
      prompt="Select an item..."
      onValueChange={(itemValue) => setOrdering(itemValue)}>
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
  </Picker>
  )
};

export default RepositoriesMeniu;
