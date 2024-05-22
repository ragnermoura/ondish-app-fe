import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImgCard = styled.Image`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  width: 80%;
  font-size: 24px;
  font-weight: bold;
  color: ${config.colors.black};
  margin-bottom: 20px;
  text-align: center;
  line-height: 32px;
`;

export const TextCard = styled.Text`
  width: 90%;
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.placeholder};
  margin-bottom: 30px;
  text-align: center;
  line-height: 22px;
`;
