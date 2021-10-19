import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './pages/signin';
import Login from './pages/login';
import ProductList from './pages/products-list';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="productList" component={ProductList} />
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="signIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;