import React, { Fragment, useState } from "react";
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
} from "./styles";
import { Image, ScrollView, Text, View } from "react-native";
import OrderCheckout from "../../components/cards/orderCheckout/orderCheckout";
import IconBackRight from "../../../assets/icons/iconBackRight.svg";
import MainButton from "../../components/buttons/mainButton";
import { useNavigation } from "@react-navigation/native";
import IconCard from "../../../assets/icons/iconCreditCard.svg";
import PopUp from "../../components/popUpConfirmation/popUpConfirmation";

export default ({ route }) => {
  const [clicked, setClicked] = useState(false);

  const pay = () => {
    setClicked(true);
  };

  // const { name } = route.params;
  const name = "Susie Bridges";

  const navigation = useNavigation();

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
            <UserImg
              source={require("../../../assets/images/perfilImg1.png")}
            />
            <UserText>{name}</UserText>
          </UserCard>
          <OrdersCard>
            <OrderCheckout
              number={1}
              title={"Cookie Sandwich"}
              text={"Shortbread, chocolate turtle cookies, and red velvet"}
              value={`${7.4}€`}
            />
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
              text={"Shortbread, chocolate turtle cookies, and red velvet"}
              value={`${7.4}€`}
            />
            <OrderCheckout
              number={2}
              title={"Oyster Dish"}
              text={"Shortbread, chocolate turtle cookies, and red velvet"}
              value={`${7.4}€`}
            />
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
                Escolher forma de pagamento
              </ChooseMethod>
              <IconBackRight />
            </PaymentMethod>
          </Payment>
          <MainButton text={"Pagar"} onPress={() => pay()} />
        </Container>
      </ScrollView>
    </Fragment>
  );
};
