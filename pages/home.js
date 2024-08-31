import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../utilies/routes";

export default function Home({ navigation }) {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="users page"
        onPress={() => {
          navigate(routes.users);
        }}
      ></Button>
      {/* <Button
        title="Go To User"
        onPress={() => {
          navigate(routes.users);
        }}
      ></Button> */}
      {/* <Button title='Go To User' onPress={()=>{navigation.navigate('Users')}}></Button> */}
    </View>
  );
}
