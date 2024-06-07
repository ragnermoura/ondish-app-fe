import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/tabBar/CustomTabBar";

import Home from "../screens/home/index";
import Pesquisar from "../screens/pesquisar";
import HeaderComp from "../components/header/headerComp";
import Carrinho from "../screens/carrinho";
import HeaderOrder from "../components/header/headerOrder";
import InTheRestaurant from "../screens/order/inTheRestaurant";
import SelectedPerson from "../screens/order/selectedPerson";
import Perfil from "../screens/perfil";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={{
      headerShown: true,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    ></Tab.Screen>

    <Tab.Screen
      name="Pesquisar"
      component={Pesquisar}
      options={{
        header: () => <HeaderComp />,
      }}
    ></Tab.Screen>

    <Tab.Screen
      name="Perfil"
      component={Perfil}
      options={{
        header: () => <HeaderComp />,
      }}
    ></Tab.Screen>

    <Tab.Screen
      name="Carrinho"
      component={Carrinho}
      options={{
        header: () => <HeaderComp title={"Carrinho"} />,
      }}
    ></Tab.Screen>

    <Tab.Screen
      name="OrderInTheRestaurant"
      component={InTheRestaurant}
      options={{
        // header: () => <HeaderOrder icon={"back"} />,
        header: () => <HeaderOrder iconLeft={"back"} iconRight={"close"} />,
      }}
    ></Tab.Screen>

    <Tab.Screen
      name="SelectedPerson"
      component={SelectedPerson}
      options={{
        header: () => <HeaderComp />,
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);
