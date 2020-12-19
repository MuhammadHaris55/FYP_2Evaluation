import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './LoginScreen/LoginScreen';
import SignUpScreen from './RegistrationScreen/RegistrationScreen';
import Explore from './ExploreScreen';
import RegistrationScreen from './RegistrationScreen/RegistrationScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import Home from './HomeScreen'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="Explore" component={Explore} />
    {/* <RootStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
    <RootStack.Screen name="Registration" component={RegistrationScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Home" component={Home} />
  </RootStack.Navigator>
);

export default RootStackScreen;
