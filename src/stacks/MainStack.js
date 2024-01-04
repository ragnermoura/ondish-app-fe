import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splashscreen from "../screens/splashscreen/splashscreen";
import Login from "../screens/auth/login";
import Redefinir from "../screens/auth/redefinir";
import Recuperar from "../screens/auth/recuperar";
import Registar from "../screens/auth/registar";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Redefinir" component={Redefinir} />
        <Stack.Screen name="Recuperar" component={Recuperar} />
        <Stack.Screen name="Registar" component={Registar} />

    </Stack.Navigator>
);