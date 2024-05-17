import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import UserContextProvider from "./src/contexts/UserContext";
import { StatusBar } from "react-native";

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
        <StatusBar
          barStyle={"dark-content"}
          translucent={true}
          backgroundColor={"transparent"}
        />
      </NavigationContainer>
    </UserContextProvider>
  );
};
