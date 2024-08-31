import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../utilies/routes";
import Home from "../pages/home";
import Users from "../pages/users";
import Details from "../pages/details";
import About from "../pages/about";
import TopNavigation from "./topNavigation";
import DrawerNavigation from "./drawerNavigation";
const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={Home}
        options={{
          headerTitle: "Home Screen",
          // header:()=>null,
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
          headerTitleAlign: "left",
          // headerTitleStyle:{
          //   fontSize:
          // }
        }}
      ></Stack.Screen>
      {/* <Stack.Screen
        name={routes.tab}
        component={TopNavigation}
        // options={{ headerShown: false }}
      ></Stack.Screen> */}
      {/* <Stack.Screen
        name={routes.drawer}
        component={DrawerNavigation}
        // options={{ headerShown: false }}
      ></Stack.Screen> */}

      <Stack.Screen name={routes.users} component={Users}></Stack.Screen>
      <Stack.Screen name={routes.details} component={Details}></Stack.Screen>
      <Stack.Screen name={routes.about} component={About}></Stack.Screen>
    </Stack.Navigator>
  );
}
