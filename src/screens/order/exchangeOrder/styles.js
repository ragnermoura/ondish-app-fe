import React from "react";
import styled from "styled-components/native";
import config from "../../../../assets/config.json";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
  align-items: center;
`;

export const RedCircle = styled.Image`
  position: absolute;
  right: 0;
  top: -10%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  width: 70%;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 60px;
  line-height: 32px;
`;

export const UserCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-left: -20px;
`;

export const ImgUser = styled.Image`
  margin-right: 23px;
`;

export const TextUser = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
`;
