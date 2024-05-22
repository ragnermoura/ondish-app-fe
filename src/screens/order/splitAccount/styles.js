import React from "react";
import styled from "styled-components/native";
import config from "../../../../assets/config.json";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${config.colors.black};
  margin-bottom: 25px;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.placeholder};
  width: 80%;
  text-align: center;
  margin-bottom: 60px;
`;

export const BoxButton = styled.View`
  width: 70%;
`;

export const Spacing = styled.View`
  margin-bottom: 20px;
`;
