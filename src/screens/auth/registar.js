import React, {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, Title, Subtext, InputArea, InputPassword, Linked, SpanText } from "./styles";
import SigInput from '../../components/input/mainInput';
import Btn from '../../components/buttons/mainButton';
import BtnFB from '../../components/buttons/faceButton';
import BtnGoogle from '../../components/buttons/googleButton';
import { View, Text } from "react-native";


export default () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.reset({
      routes: [{ name: 'Login' }],
    });
  };

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  return (
  <Container>

    <Subtext>
    Digite seu nome, e-mail e senha para se inscrever. 
      <Linked onPress={handleRegister}>
        <SpanText>Ja tem uma conta?</SpanText>
      </Linked>
    </Subtext>
    

    <InputArea>
    <SigInput
        placeholder="Nome completo"
        value={emailField}
        onChangeText={t => setEmailField(t)}
      />

      <SigInput
        placeholder="Endereço de e-mail"
        value={emailField}
        onChangeText={t => setEmailField(t)}
      />

      <InputPassword>
        <SigInput
          placeholder="Sua senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          isPassword={true}
        />
      </InputPassword>

      <View style={{marginTop: 20}}></View>

      <Btn text={"Entrar"} />

      <Text style={{color: '#868686', textAlign: 'center', fontSize: 15, marginBottom: 20}}>
        Ao se inscrever, você concorda com nossos Termos, Condições e Política de Privacidade.
      </Text>

      <Text style={{color: '#010F07', textAlign: 'center', fontSize: 16, marginBottom: 20}}>Ou</Text>

      <BtnFB text={"Continuar com Facebook"} />
      <BtnGoogle text={"Continuar com Google"} />

    </InputArea>

  </Container>
  );
};
