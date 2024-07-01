import React, { useState, useEffect, useContext, StyleSheet } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  SubTitle,
  Label,
  InputArea,
  InputPassword,
  SpanText2,
  ViewClick,
  TextSimple,
} from "./styles";
import Btn from "../../components/buttons/mainButton";
import { Text, View } from "react-native";
import InputPhone from "../../components/input/addNumInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../services/auth/index";

export default () => {
  const navigation = useNavigation();
  const [telemovelField, setTelemovelField] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddNumber = () => {
    if (telemovelField === "") {
      alert("😬 Preencha o campo");
    } else {
      const storeData = async (key, value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
        } catch (error) {
          console.error("Error storing data", error);
        }
      };
      storeData("telefone", { telefone: telemovelField });

      const getData = async (key) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key);
          return JSON.parse(jsonValue);
        } catch (error) {
          console.error("Error storing data", error);
        }
      };
      getData("registrar").then((value) => {
        // console.log(
        //   value.email,
        //   value.password,
        //   value.nome,
        //   value.apelido,
        //   telemovelField
        // );
        api
          .register(
            value.email,
            value.password,
            value.nome,
            value.apelido
            // telemovelField
          )
          .then((res) => {
            console.log(res);
            if (res.status === 202) {
              const id_usuario = res.data.usuarioCriado.id_user;
              setIsLoading(true);
              setTimeout(() => {
                navigation.navigate("Verificar", { id: id_usuario });
              }, 3000);
            }
          });
      });
    }

    // navigation.navigate("Verificar");
  };

  return (
    <Container>
      <SubTitle>Comece a usar o Ondish</SubTitle>
      <Text style={{ fontSize: 16, color: "#010f07", textAlign: "center" }}>
        Introduza o seu número de telefone para utilizar a Ondish Foods e
        desfrute da sua comida :)
      </Text>

      <InputArea>
        <Label>Número de telefone</Label>
        <InputPhone
          placeholder="000 000 000"
          value={telemovelField}
          onChangeText={(t) => setTelemovelField(t)}
        />
      </InputArea>

      <View style={{ marginTop: 20 }}></View>
      <Btn text={"Continuar"} onPress={handleAddNumber} isLoading={isLoading} />

      <ViewClick>
        <TextSimple>
          Não recebeu o código? <SpanText2>Enviar novamente</SpanText2>
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
