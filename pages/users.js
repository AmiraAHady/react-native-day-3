import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import routes from "../utilies/routes";
export default function Users() {
  const [UsersData, setUsersData] = useState([]);
  const { navigate } = useNavigation();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((userList) => {
        setUsersData(userList);
      });
  }, []);
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
                  navigate(routes.details,{id:item.id,name:item.username});
                }}
              />
            </Text>
          </View>
        )}
      ></FlatList>
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
