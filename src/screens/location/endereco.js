import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
import {
  Container,
  Title,
  Subtitle,
  InputAreaView,
  ButtonArea,
  TextButton
} from "./styles";

import LocationIcon from "../../../assets/icons/iconLocation.svg";
import InputEndereco from "../../components/input/defaultInput";


export default () => {
  const [locationField, setLocationField] = useState("");
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  const handleLocation = async () => {
    
    let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
    console.log(text)
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text)
  }
  };

  return (
    <Container>
        <Title>Encontre restaurantes perto de você</Title>
        <Subtitle>
          Por favor, insira a sua localização ou permita o acesso à sua
          localização para encontrar restaurantes perto de si
        </Subtitle>
        <ButtonArea onPress={handleLocation}>
            <LocationIcon/>
            <TextButton> Usar localização atual </TextButton>
        </ButtonArea>
      
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
