import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header/headerAuth";
import Splashscreen from "../screens/splashscreen/splashscreen";
import Welcome from "../screens/auth/welcome";
import Login from "../screens/auth/login";
import Redefinir from "../screens/auth/redefinir";
import Recuperar from "../screens/auth/recuperar";
import Registar from "../screens/auth/registar";
import Endereco from "../screens/location/endereco";
import Verificar from "../screens/auth/verificar";
import AddNum from "../screens/auth/adicionarNumero";
import QrcodeScreen from "../screens/qrcode/index";
import MainTab from "./MainTab";
import VerificarEmail from "../screens/auth/verificarEmail";
import NovaSenha from "../screens/auth/novaSenha";
import InTheRestaurant from "../screens/order/inTheRestaurant";
import HeaderOrder from "../components/header/headerOrder";
import InviteFriends from "../screens/inviteFriends";
import AddOrder from "../screens/order/addOrder";
import IndividualCheckout from "../screens/individualCheckout";
import SplitAccount from "../screens/order/splitAccount";
import HeaderComp from "../components/header/headerComp";
import ExchangeOrders from "../screens/order/exchangeOrder";
import SelectedPerson from "../screens/order/selectedPerson";
import CheckoutFinal from "../screens/checkoutFinal";
import PaymentMethod from "../screens/paymentMethod";
import Cards from "../screens/cards";
import AddCards from "../screens/addCards";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Splashscreen"
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen
      name="Splashscreen"
      component={Splashscreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        header: () => <Header title={"Login"} />,
      }}
    />
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Redefinir"
      component={Redefinir}
      options={{
        header: () => <Header title={"Redefinir"} />,
      }}
    />
    <Stack.Screen
      name="Recuperar"
      component={Recuperar}
      options={{
        header: () => <Header title={"Recuperar senha"} />,
      }}
    />
    <Stack.Screen
      name="Registar"
      component={Registar}
      options={{
        header: () => <Header title={"Registar"} />,
      }}
    />

    <Stack.Screen
      name="Endereco"
      component={Endereco}
      options={{
        header: () => <Header title={"Localização"} />,
      }}
    />

    <Stack.Screen
      name="Verificar"
      component={Verificar}
      options={{
        header: () => <Header title={"Verificar para Ondish"} />,
      }}
    />

    <Stack.Screen
      name="VerificarEmail"
      component={VerificarEmail}
      options={{
        header: () => <Header title={"Verificar para Ondish"} />,
      }}
    />

    <Stack.Screen
      name="NovaSenha"
      component={NovaSenha}
      options={{
        header: () => <Header title={"Definir Nova senha"} />,
      }}
    />

    <Stack.Screen
      name="AddNum"
      component={AddNum}
      options={{
        header: () => <Header title={"Adicionar Número"} />,
      }}
    />
    <Stack.Screen
      name="QrcodeScreen"
      component={QrcodeScreen}
      options={{
        header: () => <Header />,
      }}
    />

    {/* <Stack.Screen
      name="OrderInTheRestaurant"
      component={InTheRestaurant}
      options={{
        header: () => <HeaderOrder icon={"back"} />,
      }}
    /> */}

    <Stack.Screen
      name="AddOrder"
      component={AddOrder}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="IndividualCheckout"
      component={IndividualCheckout}
      options={{
        header: () => <HeaderOrder icon={"close"} title={"Mesa"} />,
      }}
    />

    <Stack.Screen
      name="InviteFriends"
      component={InviteFriends}
      options={{
        header: () => <HeaderOrder icon={"close"} />,
      }}
    />

    <Stack.Screen
      name="ExchangeOrders"
      component={ExchangeOrders}
      options={{
        header: () => <HeaderComp />,
      }}
    />

    <Stack.Screen
      name="SplitAccount"
      component={SplitAccount}
      options={{
        header: () => <HeaderComp />,
      }}
    />

    {/* <Stack.Screen
      name="SelectedPerson"
      component={SelectedPerson}
      options={{
        header: () => <HeaderComp />,
      }}
    /> */}

    <Stack.Screen
      name="CheckoutFinal"
      component={CheckoutFinal}
      options={{
        header: () => <HeaderComp title={"Check-out"} />,
      }}
    />

    <Stack.Screen
      name="PaymentMethod"
      component={PaymentMethod}
      options={{
        header: () => <HeaderComp title={"Forma de pagamento"} />,
      }}
    />

    <Stack.Screen
      name="Cards"
      component={Cards}
      options={{
        header: () => <HeaderComp title={"Métodos de Pagamento"} />,
      }}
    />

    <Stack.Screen
      name="AddCards"
      component={AddCards}
      options={{
        header: () => <HeaderComp />,
      }}
    />

    <Stack.Screen
      name="MainTab"
      component={MainTab}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
