import React, {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, Title, Subtext, InputArea, InputPassword, Linked, TextSimple, TextSub } from "./styles";
import SigInput from '../../components/input/mainInput';
import Btn from '../../components/buttons/mainButton';
import BtnFB from '../../components/buttons/faceButton';
import BtnGoogle from '../../components/buttons/googleButton';


export default () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.reset({
      routes: [{ name: 'Registar' }],
    });
  };


  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  return (
  <Container>

    <Title>Ondish</Title>
    <Subtext>
      Digite seu número de telefone ou e-mail para entrar ou <Linked onPress={handleRegister}>Criar nova conta</Linked>
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

      <TextSimple>
        Esqueceste a palavra-passe?
      </TextSimple>

      <Btn text={"Entrar"} />
      <TextSub>Ou</TextSub>
      <BtnFB text={"Continuar com Facebook"} />
      <BtnGoogle text={"Continuar com Google"} />

    </InputArea>

  </Container>
  );
};
