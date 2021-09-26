import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const TouchField = ({textVal, redirectVal}) => {


    return(    
        <TouchableOpacity onPress={redirectVal ? redirectVal : null} >
            <Text>{textVal}</Text>
        </TouchableOpacity>
    );
} 

export default TouchField;