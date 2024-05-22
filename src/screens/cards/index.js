import React from "react";
import { Container, ImgCard, TextCard, Title } from "./styles";
import { Image, Text } from "react-native";
import ThirdButton from "../../components/buttons/thirdButton";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImgCard source={require("../../../assets/images/imgCreditCard.png")} />
      <Title>Não tenho nenhum cartão :)</Title>
      <TextCard>
        Parece que não adicionou nenhum cartão de crédito ou débito. Pode
        facilmente adicionar um cartão.
      </TextCard>
      <ThirdButton
        text={"Adicionar cartões de crédito"}
        onPress={() => navigation.navigate("AddCards")}
      />
    </Container>
  );
};
