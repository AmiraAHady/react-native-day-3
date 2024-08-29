import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import routes from '../utilies/routes';
import Home from '../pages/home';
import Users from '../pages/users';
import About from '../pages/about';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.home} component={Home} />
      <Drawer.Screen name={routes.users} component={Users} />
      <Drawer.Screen name={routes.about} component={About} />
    </Drawer.Navigator>
  )
}