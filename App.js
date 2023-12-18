import React,{useState} from 'react'
import {Button,View,Text,TextInput} from 'react-native'
import SignUp  from './SignUp';
import LogIn from './LogIn';
import ViewProducts from './ViewProducts';
import ProductDetail from './ProductDetail';
import PlaceOrders from './PlaceOrders'
import ConfirmOrder from './ConfirmOrder'
import Admin  from './Admin';
import ReviewOrders from './ReviewOrders'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export const ipAdrr='192.168.110.222';
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogIn'>
      <Stack.Screen name="ViewProducts" component={ViewProducts} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="PlaceOrders" component={PlaceOrders} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp}   />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="ReviewOrders" component={ReviewOrders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
