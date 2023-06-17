import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('sports');

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
  };

  return (
    <View>
      <DropDownPicker
        items={[
          { label: 'Sports', value: 'sports' },
          { label: 'Entertainment', value: 'entertainment' },
          { label: 'Health', value: 'health' },
          { label: 'Science', value: 'science' },
          { label: 'General', value: 'general' },
        ]}
        defaultValue={selectedValue}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{ justifyContent: 'flex-start' }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => handleValueChange(item.value)}
      />
    </View>
  );
};

export default Dropdown;
