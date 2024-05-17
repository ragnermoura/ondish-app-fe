import React from "react";
import {
  ButtonArea,
  Container,
  TextButton,
  ImgGift,
  Title,
  BoxButton,
  BoxInfo,
  InputArea,
  Input,
  IconArrow,
} from "./styles";
import { Image, Text, TextInput } from "react-native";
import MainButton from "../../components/buttons/mainButton";

export default () => {
  return (
    <Container>
      <BoxInfo>
        <ImgGift source={require("../../../assets/images/gift.png")} />
        <Title>Convidar amigos para sua sala</Title>
        <InputArea>
          <IconArrow fill="#444" />
          <Input
            placeholder="https://ui8.net/76738b"
            placeholderTextColor={"#010f07"}
          />
        </InputArea>
      </BoxInfo>
      <BoxButton>
        <MainButton text={"Email"} />
        <ButtonArea>
          <TextButton>Outros</TextButton>
        </ButtonArea>
      </BoxButton>
    </Container>
  );
};
