import React, {useState, useEffect, useContext, StyleSheet} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, Title, Subtext, InputArea, InputPassword, Linked } from "./styles";
import SigInput from '../../components/input/mainInput';
import Btn from '../../components/buttons/mainButton';
import { Text, View } from "react-native";


export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');

  return (
  <Container>

    <Title>Redefinir Palavra-passe</Title>
    <Subtext>
      Digite seu endereço de e-mail e enviaremos instruções de redefinição.
    </Subtext>
    

    <InputArea>
      <SigInput
        placeholder="Escreva o seu e-mail"
        value={emailField}
        onChangeText={t => setEmailField(t)}
        isPassword={false}
      />


      <View style={{marginTop: 20}}></View>
      <Btn text={"Redefinir senha"} />

    </InputArea>

  </Container>
  );
};
