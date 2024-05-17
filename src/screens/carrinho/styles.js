import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

export const Container = styled.SafeAreaView`
  width: 100%;
  padding: 3%;
  background-color: #fff;
  align-self: center;
  align-items: center;
  height: 100%;
`;

export const HistoricButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 20px 10px 80px 0;
`;

export const HistoricButtonText = styled.Text`
  color: ${config.colors.red};
  font-weight: 700;
`;

export const CardInfo = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 150px;
`;

export const ImgCard = styled.View`
  width: 100%;
  align-items: center;
`;

export const ImgCar = styled.View`
  width: 50%;
  height: 150px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const TextCar = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const TextInfo = styled.Text`
  width: 80%;
  font-size: 16px;
  color: ${config.colors.placeholder};
  text-align: center;
`;
