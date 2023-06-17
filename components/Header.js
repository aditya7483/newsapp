import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Dropdown /> */}
      <Text style={styles.title}>News 74</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
