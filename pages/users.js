import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import routes from "../utilies/routes";
import axios from "axios";
import useAxios from "axios-hooks";
import { UserContext } from "../contexts/usersContextProvider";
export default function Users() {

  const {dispatch,UsersData, loading, error } = useContext(UserContext);
     const {navigate}=useNavigation()
  if (loading) {
    return (
      <View>
        <Text>loading....</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>Error Getting data</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={UsersData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.userName}>{item.username}</Text>
            <Text style={styles.email}>
              {item.email}
              <Icon
                name="user"
                size={26}
                color="orange"
                onPress={() => {
                  navigate(routes.details, {
                    id: item.id,
                    name: item.username,
                  });
                }}
              />
            </Text>
          </View>
        )}
      ></FlatList>
      {/* <Button title="Add User" onPress={()=>{
         dispatch({type:'ADDUSER',payload:{id:30,username:'Ahmed',email:'ahmed@gmail.com'}})
        //  setUsersData((oldUsers)=>[...oldUsers,{id:30,username:'Ahmed',email:'ahmed@gmail.com'}])
      }}></Button> */}
      <Button title="Clear Users" onPress={()=>{
         dispatch({type:'CLEAR'})
        //  setUsersData((oldUsers)=>[...oldUsers,{id:30,username:'Ahmed',email:'ahmed@gmail.com'}])
      }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    // justifyContent: "center",
    // alignItems: "center",
  },
  item: {
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: "pink",
  },

  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "green",
  },
  //   icon: {
  //     marginLeft: 10,
  //   },
});
