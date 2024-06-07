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
  TextSimpleArea,
  Spacing,
} from "./styles";
import SigInput from "../../components/input/mainInput";
import Btn from "../../components/buttons/mainButton";
import BtnFB from "../../components/buttons/faceButton";
import BtnGoogle from "../../components/buttons/googleButton";
import api from "../../../services/auth/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ route }) => {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  let restaurant = null;

  if (route.params) {
    const { id_restaurant } = route.params;
    restaurant = id_restaurant;
  }

  const handleEntrar = () => {
    if (emailField === "" || passwordField === "") {
      alert("Erro", "Preencha todos os campos");
    } else {
      api.login(emailField, passwordField).then((res) => {
        if (res) {
          if (res.data) {
            // console.log(res.data);
            if (res.status === 200) {
              // alert("Sucesso", "Login efetuado com sucesso");
              const clearStorage = async () => {
                try {
                  await AsyncStorage.clear();
                } catch (e) {
                  console.error("Error clearing AsyncStorage", e);
                }
              };
              clearStorage();

              const storeObject = async (key, value) => {
                try {
                  const jsonValue = JSON.stringify(value);
                  await AsyncStorage.setItem(key, jsonValue);
                } catch (error) {
                  console.error("Error storing object", error);
                }
              };
              storeObject("token", { token: res.data.token });

              api.getPerfil().then((res) => {
                res.data.response.map((e) => {
                  // console.log(e.email, emailField, e.email == emailField);
                  if (e.email == emailField) {
                    console.log(e);
                    const storeObject = async (key, value) => {
                      try {
                        const jsonValue = JSON.stringify(value);
                        await AsyncStorage.setItem(key, jsonValue);
                      } catch (error) {
                        console.error("Error storing object", error);
                      }
                    };
                    storeObject("perfil", { perfil: e });
                  } else {
                    return;
                  }
                });
              });

              // const getObject = async (key) => {
              //   try {
              //     const jsonValue = await AsyncStorage.getItem(key);
              //     return jsonValue != null ? JSON.parse(jsonValue) : null;
              //   } catch (error) {
              //     console.error("Error retrieving object", error);
              //   }
              //   return null;
              // };
              // getObject("perfil").then((perfil) => console.log(perfil));

              if (restaurant) {
                navigation.navigate("OrderInTheRestaurant", {
                  id: restaurant,
                });
              } else {
                navigation.reset({
                  routes: [{ name: "MainTab" }],
                });
              }
            } else {
              alert("Erro 1", res.data.message);
            }
          } else {
            alert("Erro 2", res.message);
          }
        } else {
          alert("Erro", "Erro ao efetuar login");
        }
      });
    }
  };

  const handleRegister = () => {
    // caso queira fazer o login assim que se registrar entao passar o id do restaurante por parametro na rota caso precise
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
      routes: [{ name: "Redefinir" }],
    });
  };

  return (
    <Container>
      <Title>Ondish</Title>
      <Subtext>
        Digite seu número de telefone ou e-mail para entrar ou
        <Linked onPress={handleRegister}>
          <SpanText> Criar nova conta.</SpanText>
        </Linked>
      </Subtext>
      <Spacing />
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
