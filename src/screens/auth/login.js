import React, {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, Title, Subtext, InputArea, InputPassword, Linked } from "./styles";
import SigInput from '../../components/input/mainInput';
import Btn from '../../components/buttons/mainButton';
import BtnFB from '../../components/buttons/faceButton';
import BtnGoogle from '../../components/buttons/googleButton';
import { Text } from "react-native";


export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  return (
  <Container>

    <Title>Ondish</Title>
    <Subtext>
      Digite seu número de telefone ou e-mail para entrar ou <Linked>Criar nova conta</Linked>
    </Subtext>
    

    <InputArea>
      <SigInput
        placeholder="Escreva o seu e-mail"
        value={emailField}
        onChangeText={t => setEmailField(t)}
        isPassword={false}
      />

      <InputPassword>
        <SigInput
          placeholder="Sua senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          isPassword={true}
        />
      </InputPassword>

      <Text style={{color: '#010F07', textAlign: 'center', fontSize: 12, fontWeight: 'bold', marginBottom: 20, marginTop: 20}} >
        Esqueceste a palavra-passe?
      </Text>

      <Btn text={"Entrar"} />
      <Text style={{color: '#010F07', textAlign: 'center', fontSize: 16, marginBottom: 20}}>Ou</Text>
      <BtnFB text={"Continuar com Facebook"} />
      <BtnGoogle text={"Continuar com Google"} />

    </InputArea>

  </Container>
  );
};
