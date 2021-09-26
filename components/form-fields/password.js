import React from 'react';
import {View, TextInput, Text} from 'react-native';

const PasswordField = ({placeholder, name}) => {
    return(
        <View>
            <TextInput class="inputVal" secureTextEntry placeholder={placeholder} name={name} value  />
            <Text>Please enter the valid value</Text>
        </View>
    );
} 

export default PasswordField;