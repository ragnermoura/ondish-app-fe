import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splashscreen from "../screens/splashscreen/splashscreen";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />

    </Stack.Navigator>
);