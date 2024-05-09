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
  ViewClick,
  Iconqrcode,
  CustomButtonQrcode,
  TextSimpleQr,
  TextSimpleArea
} from "./styles";
import SigInput from "../../components/input/mainInput";
import Btn from "../../components/buttons/mainButton";
import BtnFB from "../../components/buttons/faceButton";
import BtnGoogle from "../../components/buttons/googleButton";
import api from "../../../services/auth/index";

export default () => {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEntrar = () => {
    if (emailField === "" || passwordField === "") {
      alert("Erro", "Preencha todos os campos");
    } else {

      api.login(emailField, passwordField).then((res) => {
        if (res) {
          if (res.data) {
            if (res.data.status === "success") {
              alert("Sucesso", "Login efetuado com sucesso");
              navigation.reset({
                routes: [{ name: "MainTab" }],
              });
            } else {
              alert("Erro", res.data.message);
            }
          } else {
            alert("Erro", res.message);
          }
        } else {
          alert("Erro", "Erro ao efetuar login");
        }
      });

    }
  };

  const handleRegister = () => {
    navigation.reset({
      routes: [{ name: "Registar" }],
    });
  };

  const handleQrcode = () => {
    navigation.reset({
      routes: [{ name: "QrcodeScreen" }],
    });
  };


  const handleRecovery = () => {
    navigation.reset({
      routes: [{ name: 'Redefinir' }],
    });
  };





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
          isEmail={true}
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

        <Btn text={"Entrar"} onPress={handleEntrar} />
        <TextSub>Ou</TextSub>
        
        <BtnGoogle text={"Continuar com Google"} />
        <CustomButtonQrcode onPress={handleQrcode}>
          <Iconqrcode />
          <TextSimpleArea>
            <TextSimpleQr>Leitura do cardápio</TextSimpleQr>
          </TextSimpleArea>
        </CustomButtonQrcode>

      </InputArea>
    </Container>
  );
};
