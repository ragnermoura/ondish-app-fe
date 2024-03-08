import React, {useState, useEffect, useContext, StyleSheet} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, SubTitle, Subtext, InputArea, InputPassword, SpanText2 , ViewClick, TextSimple } from "./styles";
import Btn from '../../components/buttons/mainButton'; 
import { Text, View } from "react-native";



export default () => {
  const navigation = useNavigation();

  return (
  <Container>

    <SubTitle>Comece a usar o Ondish</SubTitle>
    <Text style={{fontSize: 16, color: '#010f07', textAlign: 'center'}}>
    Introduza o seu número de telefone para utilizar a Ondish Foods e desfrute da sua comida :)
    </Text>

    <InputArea></InputArea>

    <View style={{marginTop: 20}}></View>
    <Btn text={"Continuar"} />

    <ViewClick>
      <TextSimple>Não recebeu o código? <SpanText2 >Enviar novamente</SpanText2 ></TextSimple>
    </ViewClick>

    <Text style={{fontSize: 15, color: '#868686', textAlign: 'center', lineHeight: 24}}>
    Ao se inscrever, você concorda com nossos Termos, Condições e Política de Privacidade.
    </Text>

  </Container>
  );
};
