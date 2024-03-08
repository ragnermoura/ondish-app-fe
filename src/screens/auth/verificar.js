import React, {useState, useEffect, useContext, StyleSheet} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, SubTitle, Subtext, InputArea, InputPassword, SpanText2 , ViewClick, TextSimple } from "./styles";
import Btn from '../../components/buttons/mainButton'; 
import VfInput from '../../components/input/verifyInput'
import { Text, View } from "react-native";


export default () => {
  const navigation = useNavigation();


  return (
  <Container>

    <SubTitle>Verificar número de telemóvel</SubTitle>
    <Text style={{fontSize: 16, color: '#010f07', textAlign: 'center'}}>
    Enter the 4-Digit code sent to you at +1501333982
    </Text>
    

    <View 
      style={{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: '10%',
        marginRight: '10%',
        marginLeft: '10%'
      }}
    >

    <VfInput
      placeholder="4"
      value=""
      onChangeText=""
    />

    <VfInput
      placeholder="4"
      value=""
      onChangeText=""
    />

    <VfInput
      placeholder="4"
      value=""
      onChangeText=""
    />

    <VfInput
      placeholder="4"
      value=""
      onChangeText=""
    />

    </View>

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
