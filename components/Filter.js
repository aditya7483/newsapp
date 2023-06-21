import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Feather } from '@expo/vector-icons';

const MyModal = ({ data, setData, onSubmit }) => {
  const [isVisible, setisVisible] = useState(false);
  const categories = [
    'entertainment',
    'sports',
    'general',
    'health',
    'science',
    'business',
  ];
  const countryCodes = ['US', 'IN'];

  const handleChange = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setisVisible(true)}
        style={styles.filter}
      >
        <View style={styles.button}>
          <Feather name="filter" size={22} color="white" />
          <Text style={{ marginHorizontal: 5 }}>Filter</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.heading}>Select Options</Text>

          <View style={styles.dropdownContainer}>
            <Text style={styles.label}>Category:</Text>
            <ModalDropdown
              options={categories}
              defaultValue={data.category}
              style={styles.dropdown}
              textStyle={styles.dropdownText}
              dropdownStyle={styles.dropdownDropdown}
              onSelect={(index, value) => handleChange('category', value)}
            />
          </View>

          <View style={styles.dropdownContainer}>
            <Text style={styles.label}>Country Code:</Text>
            <ModalDropdown
              options={countryCodes}
              defaultValue={data.country}
              style={styles.dropdown}
              textStyle={styles.dropdownText}
              dropdownStyle={styles.dropdownDropdown}
              onSelect={(index, value) => handleChange('country', value)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setisVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                setisVisible(false);
                onSubmit();
              }}
            >
              <Text style={styles.closeButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  filter: {
    alignSelf: 'center',
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: '#E0E0E0',
  },
  button: {
    flexDirection: 'row',
    padding: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdown: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownDropdown: {
    width: 110,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  closeButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  submitButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MyModal;
