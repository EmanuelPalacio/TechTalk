import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const HomeNavegation = () => {
  const { status } = useSelector((state) => state.auth);

  if (status === "checking") {
    return (
      <ActivityIndicator
        color="blue"
        size={50}
        style={{ justifyContent: "center", alignItems: "center" }}
      />
    );
  }
  return (
    <NavigationContainer>
      {status === "unauthorized" ? (
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="Login" component={} /> */}
        </Stack.Navigator>
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
        /* pantalla de carga va en este lugar, por el momento dejo stack home */
      )}
    </NavigationContainer>
  );
};

export default HomeNavegation;
