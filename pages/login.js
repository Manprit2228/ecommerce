import React, { Component, useState } from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

import TextField from '../components/form-fields/input';
import PasswordField from '../components/form-fields/password';
import TouchField from '../components/form-fields/touchField';

const  Login = ({navigation}) => {

    const [formSubmit, formSubmitVal] = useState(0);

    const formSubmitContent = () => {
        const fieldVal = document.querySelectorAll('.inputVal');
        fieldVal.forEach((element) => {
            console.log( element.value);
        });
    }

    return (
        <View>
            <Text>Welcome to the kraya please login</Text>
            <TextField placeholder={'username'} name={'email'} />
            <PasswordField placeholder={'password'} name={'password'} />
            <View>
                <TouchField textVal={'Login'} redirectVal={() => formSubmitContent() } />
                <TouchField textVal={'Sign In'} redirectVal={() => navigation.navigate('signIn')}  />
            </View>
        </View>
    )
}

export default Login;