import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyModal from './Filter';

const SearchBar = ({ search, setSearch, onSubmit }) => {
  const handleSearch = (text) => {
    setSearch(text);
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      onSubmit();
    }
  };

  const handleSearchPress = () => {
    onSubmit();
  };

  return (
    <View style={styles.container}>
      {/* <MyModal /> */}
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={search}
        onChangeText={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearchPress}
        disabled={!(search.length > 3)}
      >
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 10,
  },
});

export default SearchBar;
