import React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchField = ({ searchFieldValue,  setSearchFieldValue }) => 
  <Searchbar 
    placeholder="Search..." 
    onChangeText={ value => setSearchFieldValue(value) }
    value={searchFieldValue}
  />

export default SearchField;
