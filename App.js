import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Sign In" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  );
}
