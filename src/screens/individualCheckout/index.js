import React, { useState } from "react";
import {
  ButtonInvite,
  Title,
  Container,
  InfoText,
  InfoTextHighlighted,
  TextInvite,
  InfoCard,
  PerfilCard,
  PerfilImg,
  PerfilName,
  CardOrder,
  SubTotalCard,
  SubTotalTitle,
  SubTotalValue,
  BoxButton,
  TextButton,
  ViewMargin,
} from "./styles";
import {
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OrderCheckout from "../../components/cards/orderCheckout/orderCheckout";
import IconBackRight from "../../../assets/icons/iconBackRight.svg";
import MainButton from "../../components/buttons/mainButton";

export default () => {
  const [subTotal, setSubTotal] = useState(29.4);

  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <StatusBar
          barStyle={"dark-content"}
          translucent={true}
          backgroundColor={"transparent"}
        />
        <ButtonInvite onPress={() => navigation.navigate("InviteFriends")}>
          <TextInvite>Convidar amigos</TextInvite>
        </ButtonInvite>
        <Title>Cliente Idrikson</Title>
        <InfoCard>
          <InfoText>
            Restaurante: <InfoTextHighlighted>McDonald's</InfoTextHighlighted>
          </InfoText>
          <InfoText>
            Reserva nº: <InfoTextHighlighted>N/A</InfoTextHighlighted>
          </InfoText>
          <InfoText>
            Mesa: <InfoTextHighlighted>28</InfoTextHighlighted>
          </InfoText>
        </InfoCard>
        <Title>Pedidos na mesa</Title>
        <View>
          <PerfilCard>
            <PerfilImg
              source={require("../../../assets/images/perfilImg1.png")}
            />
            <PerfilName>Susie Bridges</PerfilName>
          </PerfilCard>
          <CardOrder>
            <OrderCheckout
              number={1}
              title={"Cookie Sandwich"}
              text={"Shortbread, chocolate turtle cookies, and red velvet"}
              value={`${7.4}€`}
            />
          </CardOrder>
        </View>
        <View>
          <PerfilCard>
            <PerfilImg
              source={require("../../../assets/images/perfilImg2.png")}
            />
            <PerfilName>Rodney Miller</PerfilName>
          </PerfilCard>
          <CardOrder>
            <OrderCheckout
              number={1}
              title={"Combo Burger"}
              text={"Shortbread, chocolate turtle cookies, and red velvet"}
              value={`${7.4}€`}
            />
            <OrderCheckout
              number={2}
              title={"Oyster Dish"}
              text={"Shortbread, chocolate turtle cookies, and red velvet"}
              value={`${7.4}€`}
            />
          </CardOrder>
        </View>

        <SubTotalCard>
          <SubTotalTitle>SubTotal</SubTotalTitle>
          <SubTotalValue>{subTotal}€</SubTotalValue>
        </SubTotalCard>

        <BoxButton>
          <TextButton>Adicionar mais itens</TextButton>
          <IconBackRight />
        </BoxButton>
        <BoxButton>
          <TextButton>Trocar pedidos</TextButton>
          <IconBackRight />
        </BoxButton>

        <ViewMargin></ViewMargin>

        <MainButton text={"checkout"} />
      </Container>
    </ScrollView>
  );
};
