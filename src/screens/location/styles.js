import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json"


export const Container = styled.SafeAreaView`
  background-color: white;
  display: flex;
  align-items: center; /* Alinhando os itens ao centro horizontalmente */
`;

export const InputAreaView = styled.View`

width: 100%;
padding:  6%;
margin-top: 65%;

`;

export const Title = styled.Text`
  width: 287px;
  color: #010F07;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.14px;
`;

export const Subtitle = styled.Text`
  width: 318px;
  height: 35px;
  color: #868686;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
`;


export const ButtonArea = styled.TouchableOpacity`
flex-direction: row;
margin-top: 50%;
width: 100%;
height: 65px;
flex-shrink: 0;
border-radius: 11px;
justify-content: center;
text-align: center;
align-items: center;
background-color: ${config.colors.whrite};
border: 2px;
border-color: ${config.colors.red};
z-index: 999;

`;

export const TextButton = styled.Text`
color: ${config.colors.red};
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;

`;