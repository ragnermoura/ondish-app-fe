import React, { useState } from "react";
import {
  Container,
  InfoText,
  InputArea,
  Title,
  IconCard,
  InputAreaRow,
  InputAreaMinusLeft,
  InputAreaMinusRight,
  BoxButton,
  Input,
} from "./styles";
import { Image, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import config from "../../../assets/config.json";
import MainButton from "../../components/buttons/mainButton";

export default () => {
  const [cardNumber, setCardNumber] = useState("");
  const [mesAno, setMesAno] = useState(null);
  const [cvc, setCvc] = useState(null);

  const toggleCardNumber = (t) => {
    setCardNumber(t);
  };
  const toggleMesAno = (t) => {
    setMesAno(t);
  };
  const toggleCvc = (t) => {
    setCvc(t);
  };

  const navigation = useNavigation();
  return (
    <Container>
      <Title>Adicionar Cartão</Title>
      <InfoText>
        Este cartão só será cobrado quando efetuar uma encomenda.
      </InfoText>
      <InputArea>
        <IconCard />
        <Input
          placeholder="4343 4343 4343 4343"
          placeholderTextColor={config.colors.placeholder}
          value={cardNumber}
          onChangeText={(t) => toggleCardNumber(t)}
        />
      </InputArea>
      <InputAreaRow>
        <InputAreaMinusLeft>
          <Input
            placeholder="MM/YY"
            placeholderTextColor={config.colors.placeholder}
            value={mesAno}
            onChangeText={(t) => toggleMesAno(t)}
          />
        </InputAreaMinusLeft>
        <InputAreaMinusRight>
          <Input
            placeholder="CVC"
            placeholderTextColor={config.colors.placeholder}
            value={cvc}
            onChangeText={(t) => toggleCvc(t)}
          />
        </InputAreaMinusRight>
      </InputAreaRow>
      <BoxButton>
        <MainButton
          text={"Adicionar Cartão"}
          onPress={() => navigation.navigate("CheckoutFinal")}
        />
      </BoxButton>
    </Container>
  );
};
