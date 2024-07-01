import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Logo, LoadingIcon } from "./styles";

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      try {
        const clearStorage = async () => {
          try {
            await AsyncStorage.clear();
          } catch (e) {
            console.error("Error clearing AsyncStorage", e);
          }
        };
        clearStorage();
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          // navigation.reset({
          //   routes: [{ name: "MainTab", screen: "OrderInTheRestaurant" }],
          // });
          // navigation.reset({
          //   routes: [{ name: "MainTab" }],
          // });
          // passar o id do restaurante que recebe por rota ou por async storage para a rota do orderintherestaurant

          // criar a logica de cadastro do perfil junto do registrar e salvar no asyncStorage
          navigation.navigate("Login");
          // navigation.navigate("MainTab", { screen: "OrderInTheRestaurant" });
        } else {
          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        }
      } catch (error) {
        console.error("Erro ao buscar o token", error);
      }
    };

    checkToken();
  }, []);

  return (
    <Container>
      <Logo />
      <LoadingIcon size="large" color="red" />
    </Container>
  );
};
