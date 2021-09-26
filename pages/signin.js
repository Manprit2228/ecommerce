import React from 'react';
import {Text, TextInput, View ,TouchableOpacity} from 'react-native';

const SignIn = () => {
    
    return (
        <View>
            <Text>Welcome to the kraya please login</Text>
            <TextInput placeholder="firstname" />
            <TextInput placeholder="lastname" />
            <TextInput placeholder="email" />
            <TextInput
            multiline={true}
            numberOfLines={4} 
            placeholder="address" />

            <TextInput placeholder="Username" />
            <TextInput placeholder="password" secureTextEntry />
            <View>
                <TouchableOpacity
                onPress={() => alert('login in')}
                >
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SignIn;