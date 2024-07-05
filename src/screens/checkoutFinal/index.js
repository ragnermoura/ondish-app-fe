import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Title,
  UserCard,
  UserImg,
  UserText,
  OrdersCard,
  TotalTable,
  TotalTableText,
  TotalTableValue,
  AmountPay,
  AmountPayText,
  AmountPayValue,
  PromotionalCode,
  PromotionalCodeText,
  TextIncl,
  Payment,
  PaymentTitle,
  PaymentMethod,
  ChooseMethod,
  ChooseMethodText,
  IconCards,
} from "./styles";
import { Image, ScrollView, Text, View } from "react-native";
import OrderCheckout from "../../components/cards/orderCheckout/orderCheckout";
import IconBackRight from "../../../assets/icons/iconBackRight.svg";
import MainButton from "../../components/buttons/mainButton";
import { useNavigation } from "@react-navigation/native";
import IconCard from "../../../assets/icons/iconCreditCard.svg";
import PopUp from "../../components/popUpConfirmation/popUpConfirmation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseUrl } from "../../../services/config";
import IconUser from "../../../assets/icons/profile.svg";

export default ({ route }) => {
  const [clicked, setClicked] = useState(false);
  const [pedido, setPedido] = useState(null);
  const [perfil, setPerfil] = useState(null);

  const pay = () => {
    setClicked(true);
  };

  const savePedidos = (name, value, opcao1, opcao2, id_restaurant) => {
    setPedido(name, value, opcao1, opcao2, id_restaurant);
  };

  const { quantidade } = route.params;
  const name = "Susie Bridges";

  const navigation = useNavigation();

  useEffect(() => {
    const getObject = async (key) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (error) {
        console.error("Error retrieving object", error);
      }
      return null;
    };

    getObject("prato").then((name, value, opcao1, opcao2, id_restaurant) =>
      savePedidos(name, value, opcao1, opcao2, id_restaurant)
    );
    getObject("perfil").then((perfil) => setPerfil(perfil));
  }, []);

  if (perfil != null) {
    console.log(perfil, pedido);
    return (
      <Fragment>
        {clicked ? (
          <PopUp
            title={"Pagamento efetuado com sucesso"}
            text={"Obrigado por usar os nossos serviços. Bom apetite :)"}
            onpress={() =>
              navigation.navigate("MainTab", { screen: "OrderInTheRestaurant" })
            }
            buttonText={"Continuar a navegar"}
          />
        ) : (
          <></>
        )}
        <ScrollView>
          <Container>
            <Title>Pedidos na mesa</Title>
            <UserCard>
              {perfil.perfil.avatar == "/avatar/default-avatar.png" ? (
                <IconCards>
                  <IconUser />
                </IconCards>
              ) : (
                <UserImg
                  source={{ uri: `${baseUrl}/public/${perfil.perfil.avatar}` }}
                />
              )}
              {/* <UserImg
                source={require("../../../assets/images/perfilImg1.png")}
              /> */}
              <UserText>
                {perfil.perfil.nome} {perfil.perfil.sobrenome}
              </UserText>
            </UserCard>
            <OrdersCard>
              <OrderCheckout
                number={1}
                title={pedido.name}
                text={
                  pedido.opcao2 == "" && pedido.opcao1 == ""
                    ? ""
                    : `${pedido.opcao1}, ${pedido.opcao2}`
                }
                value={`${pedido.value}€`}
              />
              {quantidade > 1 ? (
                <Fragment>
                  <UserCard>
                    <UserImg
                      source={require("../../../assets/images/perfilImg2.png")}
                    />
                    <UserText>
                      {name == "Susie Bridges" ? "Rodney Miller" : name}
                    </UserText>
                  </UserCard>
                  <OrderCheckout
                    number={1}
                    title={"Combo Burger"}
                    text={
                      "Shortbread, chocolate turtle cookies, and red velvet"
                    }
                    value={`${7.4}€`}
                  />
                  <OrderCheckout
                    number={2}
                    title={"Oyster Dish"}
                    text={
                      "Shortbread, chocolate turtle cookies, and red velvet"
                    }
                    value={`${7.4}€`}
                  />
                </Fragment>
              ) : null}
            </OrdersCard>
            <TotalTable>
              <TotalTableText>Total mesa</TotalTableText>
              <TotalTableValue>29.4€</TotalTableValue>
            </TotalTable>
            <AmountPay>
              <AmountPayText>
                Valor a pagar <TextIncl>(incl. IVA)</TextIncl>
              </AmountPayText>
              <AmountPayValue>29.4€</AmountPayValue>
            </AmountPay>
            <PromotionalCode>
              <PromotionalCodeText>Código promocional</PromotionalCodeText>
              <IconBackRight />
            </PromotionalCode>
            <Payment>
              <PaymentTitle>Pagamento</PaymentTitle>
              <PaymentMethod>
                <IconCard />
                <ChooseMethod
                  onPress={() => navigation.navigate("PaymentMethod")}
                >
                  <ChooseMethodText>
                    Escolher forma de pagamento
                  </ChooseMethodText>
                </ChooseMethod>
                <IconBackRight />
              </PaymentMethod>
            </Payment>
            <MainButton text={"Pagar"} onPress={() => pay()} />
          </Container>
        </ScrollView>
      </Fragment>
    );
  } else {
    return <Container></Container>;
  }
};
