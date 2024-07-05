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
  Esqueceste,
  TextOr,
} from "./styles";
import SigInput from "../../components/input/mainInput";
import Btn from "../../components/buttons/mainButton";
import BtnFB from "../../components/buttons/faceButton";
import BtnGoogle from "../../components/buttons/googleButton";
import api from "../../../services/auth/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
// import BtnFB from "../../components/buttons/faceButton";

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
            console.log(res.status, res.data);
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

              // if (res.data.role == "usuario") {
              if (res.data.role == "usuario") {
                if (restaurant) {
                  console.log(restaurant);
                  // navigation.navigate("MainTab", {
                  //   screen: "OrderInTheRestaurant",
                  //   params: { id: restaurant },
                  // });
                  navigation.reset({
                    routes: [
                      {
                        name: "MainTab",
                        state: {
                          routes: [
                            {
                              name: "OrderInTheRestaurant",
                              params: {
                                id: restaurant,
                                sala: null,
                                salaInfo: null,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  });
                } else {
                  navigation.reset({
                    routes: [{ name: "MainTab" }],
                  });
                }
              } else if (res.data.role == "convidado") {
                navigation.reset({
                  routes: [
                    {
                      name: "AceitarConvite",
                      params: {
                        sala: res.data.salaId,
                        salaInfo: res.data.role,
                      },
                    },
                  ],
                });
              }
            } else {
              alert(res.data.message);
            }
          } else {
            alert(res.message);
          }
        } else {
          alert("Erro ao efetuar login");
        }
      });
    }
  };

  const handleRegister = () => {
    // caso queira fazer o login assim que se registrar entao passar o id do restaurante por parametro na rota caso precise
    navigation.navigate("Registar");
  };

  const handleQrcode = () => {
    if (restaurant != null) {
      alert("Você ja scanneou o Cardápio!");
    } else {
      navigation.reset({
        routes: [{ name: "QrcodeScreen" }],
      });
    }
  };

  const handleRecovery = () => {
    // navigation.navigate("Redefinir");
  };

  return (
    <Container>
      {/* <Title>Ondish</Title> */}
      {/* <Subtext>
        Digite seu número de telefone ou e-mail para entrar ou
        <Linked onPress={handleRegister}>
          <SpanText> Criar nova conta.</SpanText>
        </Linked>
      </Subtext> */}
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
          <Esqueceste>Esqueceste a palavra-passe?</Esqueceste>
        </ViewClick>

        <View style={{ marginTop: 20 }}></View>
        <Btn text={"Entrar"} onPress={handleEntrar} />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 25,
            marginTop: 10,
          }}
        >
          <View
            style={{ width: "42%", backgroundColor: "#dedede", height: 1 }}
          ></View>
          <TextOr>OU</TextOr>
          <View
            style={{ width: "42%", backgroundColor: "#dedede", height: 1 }}
          ></View>
        </View>

        {/* <BtnFB text={"Continuar com FaceBook"} />
        <BtnGoogle text={"Continuar com Google"} /> */}
        <CustomButtonQrcode onPress={handleQrcode}>
          <Iconqrcode />
          <TextSimpleArea>
            <TextSimpleQr>Leitura do cardápio</TextSimpleQr>
          </TextSimpleArea>
        </CustomButtonQrcode>
        <View style={{ marginBottom: 40 }}></View>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <Subtext>Ainda não tem conta?</Subtext>
          <Linked onPress={handleRegister}>
            <SpanText> Criar nova conta.</SpanText>
          </Linked>
        </View>
      </InputArea>
    </Container>
  );
};
