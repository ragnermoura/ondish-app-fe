import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";
import config from "../../../../assets/config.json";
import { useNavigation } from "@react-navigation/native";

export default ({ title, text, value }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AddOrder", { name: title, value: value })
      }
    >
      <FoodCard>
        <InfoDish>
          <NameFood>{title}</NameFood>
          <TextFood>{text}</TextFood>
          <ValueFood>{value} €</ValueFood>
        </InfoDish>
        <Image source={require("../../../../assets/images/imgJollof.png")} />
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
