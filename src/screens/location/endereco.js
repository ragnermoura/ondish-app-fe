import React, { useState } from "react";
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
        <ButtonLocation text={"Usar localização atual"} />
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
