import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function Details() {
  const { params } = useRoute();
  const [User, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);
  return (
    <View>
      <Text>{User.username}</Text>
      <Text>{User.email}</Text>
    </View>
  );
}
