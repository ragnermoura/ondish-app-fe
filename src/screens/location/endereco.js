import React, { useState } from "react";
import * as Location from 'expo-location';
import {
  Container,
  Title,
  Subtitle,
  TextContainer,
  BtnContainer,
  InputAreaView,
} from "./styles";

import ButtonLocation from "../../components/buttons/secondaryButton";
import InputEndereco from "../../components/input/defaultInput";


export default () => {
  const [locationField, setLocationField] = useState("");

  const obterLocalizacao = async () => {
    console.log("chamando a função obterLocalizacao...");
  
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permissão de acesso à localização negada!');
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude: ", position.coords.latitude);
        console.log("Longitude: ", position.coords.longitude);
      },
      (error) => {
        console.error("Erro ao obter a localização: ", error);
      }
    );
  };

  return (
    <Container>
      <TextContainer>
        <Title>Encontre restaurantes perto de você</Title>
        <Subtitle>
          Por favor, insira a sua localização ou permita o acesso à sua
          localização para encontrar restaurantes perto de si
        </Subtitle>
      </TextContainer>
      <BtnContainer>
        <ButtonLocation text={"Usar localização atual"} onPress={obterLocalizacao} />
        {/* A propriedade onPress agora está associada à função obterLocalizacao */}
      </BtnContainer>
      <InputAreaView>
        <InputEndereco
          placeholder="Inserir um novo endereço"
          value={locationField}
          onChangeText={(t) => setLocationField(t)}
        />
      </InputAreaView>
    </Container>
  );
};
