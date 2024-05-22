import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import IconBlackCard from "../../../assets/icons/iconBlackCard.svg";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${config.colors.black};
  margin-bottom: 24px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.placeholder};
  margin-bottom: 34px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: rgba(134, 134, 134, 0.1);
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.placeholder};
`;

export const IconCard = styled(IconBlackCard)`
  margin-right: 16px;
`;

export const InputAreaRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const InputAreaMinusLeft = styled.View`
  flex-direction: row;
  width: 50%;
  background-color: rgba(134, 134, 134, 0.1);
  padding: 15px 20px;
  border-radius: 8px;
`;

export const InputAreaMinusRight = styled.View`
  flex-direction: row;
  width: 43%;
  background-color: rgba(134, 134, 134, 0.1);
  padding: 15px 20px;
  border-radius: 8px;
`;

export const BoxButton = styled.View`
  position: absolute;
  bottom: 5%;
  width: 100%;
`;
