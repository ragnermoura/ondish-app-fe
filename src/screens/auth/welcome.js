import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Dimensions } from "react-native";
import styled from "styled-components/native";
import LogoImage from "../../../assets/images/logoWelcome.svg";
import BtnImage from "../../../assets/icons/botao.svg";

const { height } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: #fff;
  min-height: ${height + 60}px;
`;

export const BoxRounded = styled.View`
  width: 454px;
  height: 454px;
  background-color: #ed2024;
  border-radius: 454px;
  opacity: 0.1;
  position: absolute;
  left: -45%;
  top: -15%;
`;

export const Logo = styled(LogoImage)`
  align-self: center;
  margin-top: 50%;
  margin-bottom: 169px;
`;

export const Botao = styled(BtnImage)`
  align-self: center;
  margin-top: 10px;
`;

export const AreaBotao = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #3a3a3a;
  margin-bottom: 20px;
  text-align: center;
`;

export default () => {
  const navigation = useNavigation();

  const handleGo = () => {
    navigation.reset({
      routes: [{ name: "Login" }],
    });
  };

  return (
    <Container>
      <View style={{ marginTop: 30 }}>
        <BoxRounded />
        <Logo />
      </View>
      <Title>Bem-Vindo</Title>
      <Text
        style={{
          color: "#3a3a3a",
          textAlign: "center",
          fontSize: 17,
          marginBottom: 50,
        }}
      >
        Finalmente nos encontramos! Está pronto para uma experiência incrível?
      </Text>

      <AreaBotao onPress={handleGo}>
        <Botao />
      </AreaBotao>
    </Container>
  );
};
