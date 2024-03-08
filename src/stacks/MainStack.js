import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from '../components/header/headerAuth';
import Splashscreen from "../screens/splashscreen/splashscreen";
import Welcome from "../screens/auth/welcome";
import Login from "../screens/auth/login";
import Redefinir from "../screens/auth/redefinir";
import Recuperar from "../screens/auth/recuperar";
import Registar from "../screens/auth/registar";
import Endereco from "../screens/location/endereco";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{
            headerShown: true,
        }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="Login" component={Login}

            options={{
                header: () =>
                    <Header title={"Login"} />,

            }}
        />
        <Stack.Screen name="Welcome" component={Welcome}

            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="Redefinir" component={Redefinir}
            options={{
                header: () =>
                    <Header title={"Redefinir"} />,

            }}
        />
        <Stack.Screen name="Recuperar" component={Recuperar}
            options={{
                header: () =>
                    <Header title={"Recuperar senha"} />,

            }}
        />
        <Stack.Screen name="Registar" component={Registar}
            options={{
                header: () =>
                    <Header title={"Registar"} />,
            }}
        />


        <Stack.Screen name="Endereco" component={Endereco}
            options={{
                header: () =>
                    <Header title={"Localização"} />,
            }}
        />

    </Stack.Navigator>
);