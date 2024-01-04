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
        <Stack.Screen name="Login" component={Login}  
            options={{
                header: () => ( {/* Aqui dentro tu coloca o que quiser pro header, mané! */} )                    
            }}        
            />
        <Stack.Screen name="Redefinir" component={Redefinir} 
            options={{
                header: () => ( {/* Aqui dentro tu coloca o que quiser pro header, mané! */} )                    
            }}   
        />
        <Stack.Screen name="Recuperar" component={Recuperar} 
            options={{
                header: () => ( {/* Aqui dentro tu coloca o que quiser pro header, mané! */} )                    
            }}        
        />
        <Stack.Screen name="Registar" component={Registar} 
            options={{
                header: () => ( {/* Aqui dentro tu coloca o que quiser pro header, mané! */} )                    
            }}        
        />

    </Stack.Navigator>
);