import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/home";
import Users from "./pages/users";
import Details from "./pages/details";
import About from "./pages/about";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/stackNavigation";
import DrawerNavigation from "./navigation/drawerNavigation";
import TopNavigation from "./navigation/topNavigation";
import UsersContextProvider, {
  UserContext,
} from "./contexts/usersContextProvider";

export default function App() {
  return (
    <UsersContextProvider>
      <NavigationContainer>
        {/* <StackNavigation></StackNavigation> */}
        <TopNavigation></TopNavigation>
      </NavigationContainer>
    </UsersContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
