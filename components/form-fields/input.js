import React from 'react';
import {View, Text, TextInput} from 'react-native';


// input field component 
const TextField = ({placeholder, name, errorMessage,value, handleValidation, handleChange}) => {
  return (
    <View>
      <TextInput
        class="inputVal"
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={handleValidation}
        onChangeText={handleChange}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default TextField;
