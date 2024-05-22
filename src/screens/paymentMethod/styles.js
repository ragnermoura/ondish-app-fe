import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
// import IconBackCard from "../../../assets/icons/iconRectangleCard.svg";
import IconInfoCard from "../../../assets/icons/iconInfoCreditCard.svg";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
`;

export const MethodCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom-width: 1px;
  border-color: rgba(134, 134, 134, 0.2);
  padding: 20px 0;
`;

export const IconCardBack = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${config.colors.red};
  border-radius: 10px;
  width: 42px;
  height: 38px;
`;

export const TextMethodCard = styled.View`
  width: 70%;
  align-items: flex-start;
`;

export const TitleMethod = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
  margin-bottom: 6px;
`;

export const TextMethod = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${config.colors.black};
`;

export const IconCardInfo = styled(IconInfoCard)``;
