import React, { Component } from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

export default class  Login extends Component {
    render() {
        return (
            <View>
                <Text>Welcome to the kraya please login</Text>
                <TextInput placeholder="Username" />
                <TextInput placeholder="password" secureTextEntry />
                <View>
                    <TouchableOpacity
                    onPress={() => alert('login in')}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => alert('sign in')}
                    >
                        <Text>sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}