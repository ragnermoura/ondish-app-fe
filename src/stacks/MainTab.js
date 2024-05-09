import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/tabBar/CustomTabBar";

import Home from "../screens/home/index";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={{
      headerShown: false,
      
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      screenOptions={{
        headerShown: false,
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);
