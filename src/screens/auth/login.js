import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Title,
  Subtext,
  InputArea,
  InputPassword,
  Linked,
  TextSimple,
  TextSub,
  SpanText,
  ViewClick
} from "./styles";
import SigInput from "../../components/input/mainInput";
import Btn from "../../components/buttons/mainButton";
import BtnFB from "../../components/buttons/faceButton";
import BtnGoogle from "../../components/buttons/googleButton";

export default () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.reset({
      routes: [{ name: "Registar" }],
    });
  };

  
  const handleRecovery = () => {
    navigation.reset({
      routes: [{ name: 'Redefinir' }],
    });
  };

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  return (
    <Container>
      <Title>Ondish</Title>
      <Subtext>
        Digite seu número de telefone ou e-mail para entrar ou
        <Linked onPress={handleRegister}>
          <SpanText> Criar nova conta</SpanText>
        </Linked>
      </Subtext>

      <InputArea>
        <SigInput
          placeholder="Escreva o seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
          isPassword={false}
        />

        <InputPassword>
          <SigInput
            placeholder="Sua senha"
            value={passwordField}
            onChangeText={(t) => setPasswordField(t)}
            isPassword={true}
          />
        </InputPassword>

        <ViewClick onPress={handleRecovery}>
        <TextSimple>Esqueceste a palavra-passe?</TextSimple>
        </ViewClick>

        <Btn text={"Entrar"} />
        <TextSub>Ou</TextSub>
        <BtnFB text={"Continuar com Facebook"} />
        <BtnGoogle text={"Continuar com Google"} />
      </InputArea>
    </Container>
  );
};
