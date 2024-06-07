import React, { Fragment, useState } from "react";
import {
  Container,
  Orders,
  Title,
  UserCard,
  UserImg,
  UserText,
  OrdersCard,
} from "./styles";
import { Image, Text, View, TouchableOpacity } from "react-native";
import OrderCheckout from "../../../components/cards/orderCheckout/orderCheckout";
import IconBackRight from "../../../../assets/icons/iconBackRight.svg";
import MainButton from "../../../components/buttons/mainButton";
import { useNavigation } from "@react-navigation/native";
import PopUp from "../../../components/popUpConfirmation/popUpConfirmation";

export default ({ route }) => {
  const [clicked, setClicked] = useState(false);

  const callPopUp = () => {
    setClicked(true);
  };

  const closePopAndNavigation = () => {
    setClicked(false);
    navigation.navigate("IndividualCheckout");
  };

  const { name } = route.params;
  // const name = "Susie Bridges";

  const navigation = useNavigation();

  return (
    <Fragment>
      {clicked ? (
        <PopUp
          title={"Pedido Trocado com sucesso"}
          text={"Continue disfrutando dos nossos serviços"}
          onpress={() => closePopAndNavigation()}
          buttonText={"Voltar a mesa"}
        />
      ) : (
        <></>
      )}
      <Container>
        <Title>Pessoa selecionada</Title>
        <UserCard>
          <UserImg
            source={require("../../../../assets/images/perfilImg1.png")}
          />
          <UserText>{name}</UserText>
        </UserCard>
        <OrdersCard>
          <Orders>Pedidos</Orders>
          <OrderCheckout
            number={0}
            title={"Cookie Sandwich"}
            text={"Shortbread, chocolate turtle cookies, and red velvet"}
            value={`${7.4}€`}
          />
          <OrderCheckout
            number={0}
            title={"Combo Burger"}
            text={"Shortbread, chocolate turtle cookies, and red velvet"}
            value={`${7.4}€`}
          />
          <OrderCheckout
            number={0}
            title={"Oyster Dish"}
            text={"Shortbread, chocolate turtle cookies, and red velvet"}
            value={`${7.4}€`}
          />
        </OrdersCard>
        <MainButton text={"Trocar"} onPress={() => callPopUp()} />
      </Container>
    </Fragment>
  );
};
