import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Subtext, InputArea, InputPassword, Linked, SpanText, InputSimple, TextSub } from "./styles";
import SigInput from '../../components/input/mainInput';
import Btn from '../../components/buttons/mainButton';
import BtnFB from '../../components/buttons/faceButton';
import BtnGoogle from '../../components/buttons/googleButton';
import { View, Text, Modal } from "react-native";
import api from '../../../services/auth/index';
import LottieView from 'lottie-react-native';
import { UserContext } from '../../contexts/UserContext';


export default () => {
  const navigation = useNavigation();
  const { dispatch: userDispatch } = useContext(UserContext);

  const [emailField, setEmailField] = useState('');
  const [nomeField, setNomeField] = useState('');
  const [apelidoField, setApelidoField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [confirmpasswordField, setPasswordConfirmField] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogin = () => {
    navigation.reset({
      routes: [{ name: 'Login' }],
    });
  };

  const handleRegister = () => {

    if (emailField === '' || passwordField === '' || confirmpasswordField === '') {
      alert("😬 Preencha todos os campos");
    } else if (passwordField !== confirmpasswordField) {
      alert("🫣 As palavras-passe não são iguais, tente novamente");
    } else {
      setIsLoading(true);

      api.register(emailField, passwordField, nomeField, apelidoField).then((res) => {
        if (res.status === 201) {

          userDispatch({
            type: 'setUser',
            payload: {
                email: emailField,
                nome: nomeField,
                apelido: apelidoField,
                senha: passwordField,
            }
        });
        
  
          api.sendNewCont(nomeField, emailField).then((res) => {
            console.log(res);
            setIsModalVisible(true);
          })

          setTimeout(() => {
            setIsLoading(false);
          }, 4000);



        } else {
          alert("Erro ao registar");
          setIsLoading(false);
        }
      });
    }

  };

  return (
    <Container>

      <Subtext>
        Digite seu nome, e-mail e senha para se inscrever.
        <Linked onPress={handleLogin}>
          <SpanText> Ja tem uma conta?</SpanText>
        </Linked>
      </Subtext>


      <InputArea>
        <InputSimple>
          <SigInput
            placeholder="Nome"
            value={nomeField}
            onChangeText={t => setNomeField(t)}
            editable={!isLoading}
          />
        </InputSimple>
        <InputSimple>
          <SigInput
            placeholder="Apelido"
            value={apelidoField}
            onChangeText={t => setApelidoField(t)}
            editable={!isLoading}
          />
        </InputSimple>

        <InputSimple>
          <SigInput
            placeholder="Endereço de e-mail"
            value={emailField}
            isEmail={true}
            onChangeText={t => setEmailField(t.charAt(0).toLowerCase() + t.slice(1))}
            editable={!isLoading}
          />
        </InputSimple>

        <InputPassword>
          <SigInput
            placeholder="Palavra-passe"
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            isPassword={true}
            editable={!isLoading}
          />
        </InputPassword>
        <InputPassword>
          <SigInput
            placeholder="Confirme sua palavra-passe"
            value={confirmpasswordField}
            onChangeText={t => setPasswordConfirmField(t)}
            isPassword={true}
            editable={!isLoading}
          />
        </InputPassword>

        <View style={{ marginTop: 20 }}></View>


        <Btn text={"Registar"} onPress={handleRegister} isLoading={isLoading} />


        <Text style={{ color: '#868686', textAlign: 'center', fontSize: 15, marginBottom: 20 }}>
          Ao se inscrever, você concorda com nossos Termos, Condições e Política de Privacidade.
        </Text>

        <TextSub>Ou</TextSub>
        <BtnFB text={"Registar com Facebook"} />
        <BtnGoogle text={"Registar com Google"} />

      </InputArea>


      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <LottieView
          source={require('../../../assets/lottie/check.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            setIsModalVisible(false);

             navigation.reset({
               routes: [{ name: 'AddNum' }],
             });

          }}
        />
      </Modal>

    </Container>
  );
};
