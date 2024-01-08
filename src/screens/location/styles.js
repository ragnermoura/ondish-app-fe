import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  
  align-items: center; /* Alinhando os itens ao centro horizontalmente */
`;

export const TextContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const InputAreaView = styled.View`

width: 100%;
padding:  6%;
margin-top: 65%;
position: absolute;

`;

export const BtnContainer = styled.View`
  display: flex;
  align-items: center;
  position: absolute;
  padding:  15%;
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
  margin-bottom: 10px; /* Adicionando margem inferior para separar do Subtitle */
`;

export const Subtitle = styled.Text`
  width: 318px;
  flex: 1;
  height: 35px;
  color: #868686;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
