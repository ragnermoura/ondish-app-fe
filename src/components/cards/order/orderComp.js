import React, { useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";
import config from "../../../../assets/config.json";
import { useNavigation } from "@react-navigation/native";
import { baseUrl } from "../../../../services/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({
  title,
  text,
  value,
  id_pratos,
  img,
  id_restaurant,
  bebida,
  sala,
  salaInfo,
}) => {
  const navigation = useNavigation();

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.navigate("Login", { id_restaurant: id_restaurant });
      } else {
        // console.log(id_pratos);
        if (sala == null) {
          navigation.navigate("InviteFriends", {
            value: value,
            prato: id_pratos,
            id_restaurant: id_restaurant,
            isBebida: bebida,
          });
        } else {
          if (salaInfo == "convidado") {
            navigation.navigate("AddOrder", {
              value: value,
              prato: id_pratos,
              id_restaurant: id_restaurant,
              isBebida: bebida,
              sala: sala,
            });
          }
          // ver se e esse caminho mesmo
          // navigation.navigate("WatingFriends", {
          //   value: value,
          //   prato: id_pratos,
          //   id_restaurant: id_restaurant,
          //   isBebida: bebida,
          //   sala: sala,
          // });
        }
      }
    } catch (error) {
      console.error("Erro ao buscar o token", error);
    }
  };

  return (
    <TouchableOpacity onPress={() => checkToken()}>
      <FoodCard>
        <InfoDish>
          <NameFood>{title}</NameFood>
          <TextFood>{text}</TextFood>
          <ValueFood>{value} €</ValueFood>
        </InfoDish>
        <Img
          source={{
            uri: `https://ondish.webserverapi.online/api/public${img}`,
          }}
        />
        {/* <Image source={require("../../../../assets/images/imgJollof.png")} /> */}
      </FoodCard>
    </TouchableOpacity>
  );
};

const FoodCard = styled.View`
  width: 100%;
  height: 130px;
  background-color: rgba(210, 210, 210, 0.5);
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 3% 2% 3% 2%;
  flex-direction: row;
  margin-bottom: 10px;
`;

const InfoDish = styled.View`
  height: 100%;
  width: 70%;
  justify-content: space-between;
  margin-right: 10px;
`;

const NameFood = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const TextFood = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
`;

const ValueFood = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${config.colors.red};
`;

const Img = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 15px;
`;
