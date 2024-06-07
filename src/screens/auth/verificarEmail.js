import React, { useState, useEffect, useContext, StyleSheet } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  SubTitle,
  Subtext,
  InputArea,
  InputPassword,
  SpanText2,
  ViewClick,
  TextSimple,
} from "./styles";
import Btn from "../../components/buttons/mainButton";
import { VerifyInput } from "../../components/input/verifyInput";
import { Text, View } from "react-native";

export default ({}) => {
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const [input4, setInput4] = useState(null);

  const navigation = useNavigation();

  const preencherInput = (t, setInput) => {
    setInput(t);
  };

  return (
    <Container>
      <SubTitle>Verificar E-mail</SubTitle>
      <Text style={{ fontSize: 16, color: "#010f07", textAlign: "center" }}>
        Introduzir o código de 4 dígitos que lhe foi enviado para
        nawfazim@icloud.com
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10%",
          marginRight: "10%",
          marginLeft: "10%",
        }}
      >
        <VerifyInput
          placeholder="4"
          value={input1}
          onChangeText={(t) => preencherInput(t, setInput1)}
        />

        <VerifyInput
          placeholder="4"
          value={input2}
          onChangeText={(t) => preencherInput(t, setInput2)}
        />

        <VerifyInput
          placeholder="4"
          value={input3}
          onChangeText={(t) => preencherInput(t, setInput3)}
        />

        <VerifyInput
          placeholder="4"
          value={input4}
          onChangeText={(t) => preencherInput(t, setInput4)}
        />
      </View>

      <View style={{ marginTop: 20 }}></View>
      <Btn
        text={"Continuar"}
        onPress={() => navigation.navigate("Recuperar")}
      />

      <ViewClick>
        <TextSimple>
          Não recebeu o código? <SpanText2>Reenviar novamente</SpanText2>
        </TextSimple>
      </ViewClick>

      <Text
        style={{
          fontSize: 15,
          color: "#868686",
          textAlign: "center",
          lineHeight: 24,
        }}
      >
        Ao se inscrever, você concorda com nossos Termos, Condições e Política
        de Privacidade.
      </Text>
    </Container>
  );
};
