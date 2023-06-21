import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dropdown from './Dropdown';
import MyModal from './Filter';

const Header = ({ modalProps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News 74</Text>
      <MyModal {...modalProps} />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
