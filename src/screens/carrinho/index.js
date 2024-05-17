import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HistoricButton,
  HistoricButtonText,
  ImgCar,
  CardInfo,
  TextCar,
  ImgCard,
  TextInfo,
} from "./styles";
import MainButton from "../../components/buttons/mainButton";

export default () => {
  return (
    <Container>
      <HistoricButton>
        <HistoricButtonText>Historico de pedidos</HistoricButtonText>
      </HistoricButton>
      <CardInfo>
        <ImgCard>
          <ImgCar></ImgCar>
          <TextCar>Carrinho vasio</TextCar>
        </ImgCard>
        <TextInfo>
          Faça um pedido, reserve um restaurante ou peça em tempo real para
          poder usufruir dos nossos serviços
        </TextInfo>
      </CardInfo>
      <MainButton text={"Adicionar mais itens"} />
    </Container>
  );
};
