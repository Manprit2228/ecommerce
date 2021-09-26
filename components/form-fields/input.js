import React from 'react';
import {View,Text, TextInput} from 'react-native';

const TextField = ({placeholder, name}) => {
    return(
        <View>
            <TextInput class="inputVal" placeholder={placeholder} name={name} value />
            <Text>Please enter the valid value</Text>
        </View>
    );
} 

export default TextField;