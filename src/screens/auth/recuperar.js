import React, {useState, useEffect, useContext, StyleSheet} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, Title, Subtext, InputArea, InputPassword, Linked } from "./styles";
import Btn from '../../components/buttons/mainButton';
import { Text, View } from "react-native";


export default () => {
  const navigation = useNavigation();


  return (
  <Container>

    <Title>E-mail de reposição enviado</Title>
    <Subtext>
    Enviamos um e-mail com instruções para Nawfazim@icloud.com. <Linked>Tem algum problema?</Linked>
    </Subtext>
    

    <InputArea>

      <View style={{marginTop: 20}}></View>
      <Btn text={"Envie novamente"} />

    </InputArea>

  </Container>
  );
};
