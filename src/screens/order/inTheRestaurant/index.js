import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
  Container,
  NameTitle,
  SubTitle,
  Rating,
  RatingNumber,
  RatingStar,
  RatingAvaliation,
  OrderCard,
  ListOrder,
  TitleOptions,
} from "./style";
import ThirdButton from "../../../components/buttons/thirdButton";
import Order from "../../../components/cards/order/orderComp";
import { useNavigation } from "@react-navigation/native";

// tirar duvida de como colocar a tabBar em baixo dessa pagina, do jeito que esta no figma
export default () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <NameTitle>Mayfield Bakery & Cafe</NameTitle>
        <SubTitle>
          Chinese{" "}
          <Image source={require("../../../../assets/icons/iconPoint.png")} />{" "}
          American{" "}
          <Image source={require("../../../../assets/icons/iconPoint.png")} />{" "}
          Deshi food
        </SubTitle>
        <Rating>
          <RatingNumber>4.3</RatingNumber>
          <RatingStar />
          <RatingAvaliation>200+ Avaliações</RatingAvaliation>
        </Rating>
        <ThirdButton
          text={"Convidar amigos"}
          onPress={() => navigation.navigate("InviteFriends")}
        />

        <OrderCard>
          <TitleOptions>Diario</TitleOptions>
          <ListOrder>
            <Order
              title={"Smokey Jollof Rice"}
              text={
                "Delicious party smokey jollof rice. Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
            <Order
              title={"Classic Fried Rice"}
              text={
                "Classic original Naija fried rice Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
            <Order
              title={"Special Coconut Rice"}
              text={
                "Coconut rice with bit of suasage. Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
          </ListOrder>
          <TitleOptions>Varios</TitleOptions>
          <ListOrder>
            <Order
              title={"Smokey Jollof Rice"}
              text={
                "Delicious party smokey jollof rice. Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
            <Order
              title={"Classic Fried Rice"}
              text={
                "Classic original Naija fried rice Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
            <Order
              title={"Special Coconut Rice"}
              text={
                "Coconut rice with bit of suasage. Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
          </ListOrder>
          <TitleOptions>Bebidas</TitleOptions>
          <ListOrder>
            <Order
              title={"Red wine"}
              text={
                "Delicious party smokey jollof rice. Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
            <Order
              title={"Rosé wine"}
              text={
                "Classic original Naija fried rice Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
            <Order
              title={"Special Coconut Rice"}
              text={
                "Coconut rice with bit of suasage. Serve with choice of protein & sides."
              }
              value={"9,5"}
            />
          </ListOrder>
        </OrderCard>
      </Container>
    </ScrollView>
  );
};
