import React, {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Text } from "react-native";
import styled from 'styled-components/native';
import LogoImage from '../../../assets/images/logo.svg';
import BtnImage from '../../../assets/icons/botao.svg';

export const Container = styled.SafeAreaView`
padding: 5%;
`;

export const BoxRounded = styled.View`
width: 454px;
height: 454px;
background-color: #ED2024;
border-radius: 454px;
opacity: .1;
position: absolute;
left: -30%;
top: -30%;
`;

export const Logo = styled(LogoImage)`
align-self: center;
margin-top: 20%;
margin-bottom: 100px;
`;

export const Botao = styled(BtnImage)`
align-self: center;
margin-top: 10px;
`;

export const AreaBotao = styled.TouchableOpacity``;

export const Title = styled.Text`
font-size: 28px;
font-weight: 900;
color: #3a3a3a;
margin-bottom: 20px;
text-align: center;
`;

export default () => {
  const navigation = useNavigation();


  const handleGo = () => {
    navigation.reset({
      routes: [{ name: 'Login' }],
    });
  };


  return (
  <Container>
    <View style={{marginTop: 50}}>
    <BoxRounded/>
    <Logo/>
    </View>
    <Title>Bem-Vindo</Title>
    <Text style={{color: '#3a3a3a', textAlign: 'center', fontSize: 17, marginBottom: 20}}>
    É um prazer conhecer-te. Estamos felizes por estares aqui, então vamos começar!
    </Text>

    <AreaBotao onPress={handleGo}><Botao/></AreaBotao>    
  </Container>
  );
};
