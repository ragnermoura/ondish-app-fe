import React, { useState } from "react";
import {
  Container,
  IconCardBack,
  IconCardInfo,
  MethodCard,
  TextMethod,
  TextMethodCard,
  TitleMethod,
} from "./styles";
import IconWallet from "../../../assets/icons/iconWallet.svg";
import IconPaypal from "../../../assets/icons/iconPaypal.svg";
import IconBackRight from "../../../assets/icons/iconBackRight.svg";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const [methodSelected, setMethodSelected] = useState("PayPal");

  const navigation = useNavigation();

  const toggleMethod = (method) => {
    if (method == methodSelected) {
      return;
    } else {
      setMethodSelected(method);
    }
  };

  return (
    <Container>
      <MethodCard onPress={() => navigation.navigate("Cards")}>
        <IconPaypal />
        <TextMethodCard>
          <TitleMethod>PayPal</TitleMethod>
          <TextMethod>Método predefinido</TextMethod>
        </TextMethodCard>
        <IconBackRight />
      </MethodCard>
      <MethodCard onPress={() => navigation.navigate("Cards")}>
        <IconCardBack>
          <IconCardInfo />
        </IconCardBack>
        <TextMethodCard>
          <TitleMethod>Cartão de crédito ou débito</TitleMethod>
          <TextMethod>Não predefinido</TextMethod>
        </TextMethodCard>
        <IconBackRight />
      </MethodCard>
      <MethodCard onPress={() => navigation.navigate("Cards")}>
        <IconWallet />
        <TextMethodCard>
          <TitleMethod>Pagar com dinheiro</TitleMethod>
          <TextMethod>Não predefinido</TextMethod>
        </TextMethodCard>
        <IconBackRight />
      </MethodCard>
    </Container>
  );
};
