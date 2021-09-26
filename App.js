import React,{Component} from 'react';
import Login from './pages/login';
import {View,Text} from 'react-native';

class App extends Component {
  render() {
    return(
      <View>
        <Login />
      </View>
    )
  }
}

export default App;