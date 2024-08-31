import { View, Text, Linking, Button } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storage from "../storage/storage";
export default function About() {
  const addToStorage = () => {
    let obj={userName:'ramy',age:20}
    storage.save({
      key: 'userData', 
      data:obj,
      expires: null
    })
    // AsyncStorage.setItem("age", age);
  }
  const getFromStorage = async () => {
    // const data = await AsyncStorage.getItem("age");
   const data=await storage.load({key:'userData',})
    alert(JSON.stringify(data));
  };
  return (
    <View>
      <Text>About</Text>
      <View
        style={{ margin: 30, justifyContent: "center", alignItems: "center" }}
      >
        <Text>
          <Icon
            name="facebook"
            size={30}
            color="blue"
            onPress={() => {
              Linking.openURL("https://www.facebook.com/");
            }}
          />
        </Text>
        <Button
          title="add to storage"
          onPress={addToStorage}
          color="pink"
        ></Button>
        <Button
          title="get from storage "
          onPress={getFromStorage}
          color="blue"
        ></Button>
      </View>
    </View>
  );
}
