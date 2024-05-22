import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import Done from "../../../assets/icons/iconDone.svg";
import { TouchableOpacity } from "react-native";

export default ({ title, text, onpress, buttonText }) => {
  return (
    <PopUp>
      <Card>
        <IconCard>
          <Done />
        </IconCard>
        <TitleCard>{title}</TitleCard>
        <TextCard>{text}</TextCard>
        <TouchableOpacity onPress={onpress}>
          <ButtonText>{buttonText}</ButtonText>
        </TouchableOpacity>
      </Card>
    </PopUp>
  );
};

const PopUp = styled.View`
  position: absolute;
  top: -20%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  align-items: center;
  justify-content: center;
`;

const Card = styled.View`
  width: 300px;
  height: 270px;
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  align-items: center;
  justify-content: space-evenly;
`;

const IconCard = styled.View`
  position: absolute;
  top: -12%;
  z-index: 12;
  width: 64px;
  height: 64px;
  border-radius: 64px;
  background-color: ${config.colors.red};
  align-items: center;
  justify-content: center;
`;

const TitleCard = styled.Text`
  width: 80%;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${config.colors.black};
`;

const TextCard = styled.Text`
  width: 70%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.placeholder};
`;

const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${config.colors.red};
`;
