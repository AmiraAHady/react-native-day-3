import { View, Text } from "react-native";
import React, { createContext, useEffect, useReducer, useState } from "react";
import useAxios from "axios-hooks";
import axios from "axios";
import { usersReducer } from "../reducers/usersReducer";

export const UserContext = createContext();
export default UsersContextProvider = ({ children }) => {
    // controlled state
//   const [UsersData, setUsersData] = useState([]);
  const [UsersData, dispatch] = useReducer(usersReducer,[]);

//   formula
//   const [state, dispatch]   =useReducer(reducer,initialState)
  const [loading, setloader] = useState(true);
  const [error, setError] = useState("");
  // const { navigate } = useNavigation();
  //   const [{ data: UsersData, loading, error }] = useAxios(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );

  const getUsers = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setloader(false);
    //   setUsersData(res.data);
    dispatch({type:'SETALLUSERS',payload:res.data})
    //   console.log(res.data)
    } catch (error) {
        
      setError("Error getting data");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <UserContext.Provider value={{ dispatch, UsersData, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
