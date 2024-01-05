import React from "react";
import styled from "styled-components/native";
import config from '../../../assets/config.json';


export const Container = styled.SafeAreaView`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 34px;
  color: #010f07;
  font-weight: bold;
  margin-bottom: 10px;
  max-width: 80%;
`;

export const Subtext = styled.Text`
  font-size: 16px;
  color: #868686;
  max-width: 80%;
  margin-bottom: 20px;
`;

export const Linked = styled.Text`
color:  ${config.colors.red};
`;

export const InputArea = styled.View`
    margin-top: 2%;
`;

export const InputPassword = styled.View`
    margin-top: 9px; 

`;

export const CustomButtonRegister = styled.TouchableOpacity`
    height: 45px;
    border: solid 2px;
    border-color: #FFF;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    
    
    
`;

