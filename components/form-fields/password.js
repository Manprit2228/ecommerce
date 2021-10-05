import React from 'react';
import {View, TextInput, Text} from 'react-native';

const PasswordField = ({
  placeholder,
  name,
  value,
  errorMessage,
  handleValidation,
  handleChange,
}) => {
  return (
    <View>
      <TextInput
        class="inputVal"
        secureTextEntry
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

export default PasswordField;
