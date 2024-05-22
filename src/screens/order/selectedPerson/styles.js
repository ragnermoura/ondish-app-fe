import React from "react";
import styled from "styled-components/native";
import config from "../../../../assets/config.json";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

export const UserCard = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const UserImg = styled.Image`
  margin-right: 12px;
`;

export const UserText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
`;

export const OrdersCard = styled.View`
  margin-bottom: 18%;
`;

export const Orders = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${config.colors.black};
`;
