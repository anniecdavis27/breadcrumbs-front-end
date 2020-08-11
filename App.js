import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'
import Dash from './components/Dash'
import History from './components/History'
import Account from './components/Account'
import Track from './components/Track'
import About from './components/About'
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
        <Screen name="Dash" component={Dash} />
        <Screen name="History" component={History} />
        <Screen name="Account" component={Account} />
        <Screen name="Track" component={Track} />
        <Screen name="About" component={About} />
      </Navigator>
    </NavigationContainer>
  );
}
