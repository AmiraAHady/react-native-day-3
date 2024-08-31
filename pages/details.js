import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { UserContext } from "../contexts/usersContextProvider";

export default function Details() {
  const { params } = useRoute();
  const [User, setUser] = useState({});
  const { UsersData } = useContext(UserContext);
  useEffect(() => {
    setUser(UsersData.find((user) => user.id == params.id));
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    //   .then((response) => {
    //     setUser(response.data);
    //   });
  }, []);
  return (
    <View>
      <Text>{User.username}</Text>
      <Text>{User.email}</Text>
    </View>
  );
}
