import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import routes from '../utilies/routes';
import Home from '../pages/home';
import Users from '../pages/users';
import About from '../pages/about';
import ChatScreen from '../pages/chat';
import StatusScreen from '../pages/status';
import CallScreen from '../pages/call';
const Tab = createMaterialTopTabNavigator();
export default function TopNavigation() {
    
  return (
    <Tab.Navigator>
    <Tab.Screen name={routes.chat} component={ChatScreen} />
    <Tab.Screen name={routes.status} component={StatusScreen} />
    <Tab.Screen name={routes.callScreen} component={CallScreen} />
  </Tab.Navigator>
  )
}