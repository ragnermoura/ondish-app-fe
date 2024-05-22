import React from "react";
import { Container, BoxButton, TextInfo, Title, Spacing } from "./styles";
import { Text } from "react-native";
import MainButton from "../../../components/buttons/mainButton";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Dividir a conta?</Title>
      <TextInfo>
        Opte por dividir a conta com os seus amigos, ou se preferir, pode
        assumir o pagamento total.
      </TextInfo>
      <BoxButton>
        <MainButton
          text={"Sim"}
          onPress={() =>
            navigation.navigate("CheckoutFinal", { name: "Susie Bridges" })
          }
        />
        <Spacing />
        <MainButton
          text={"Não"}
          onPress={() =>
            navigation.navigate("CheckoutFinal", { name: "Susie Bridges" })
          }
        />
      </BoxButton>
    </Container>
  );
};
