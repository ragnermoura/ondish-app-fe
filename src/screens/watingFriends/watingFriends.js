import React, { useState } from "react";
import { ButtonArea, Container, TextButton } from "./styles";
import MainButton from "../../components/buttons/mainButton";
import { useNavigation } from "@react-navigation/native";

export default ({ route }) => {
  const { prato, value, id_restaurant, quantidade } = route.params;
  //   const [anfitriao, setAnfitriao] = useState(anfi);
  const [anfitriao, setAnfitriao] = useState(true);

  const navigation = useNavigation();

  const handleContinuar = () => {
    navigation.navigate("AddOrder", {
      quantidade: quantidade,
      prato: prato,
      value: value,
      id_restaurant: id_restaurant,
    });
  };

  const handleAceitar = () => {};

  if (anfitriao == true) {
    return (
      <Container>
        <MainButton text={"Prosseguir"} onPress={() => handleContinuar()} />
      </Container>
    );
  } else if (anfitriao == false) {
    return (
      <Container>
        <MainButton text={"Aceitar"} onPress={() => handleAceitar()} />
        <ButtonArea
        // onPress={() => {
        //   if (convidados.length > 0) {
        //     alert("Você selecionou alguém para convidar");
        //   } else {
        //     navigation.navigate("AddOrder", {
        //       quantidade: 1,
        //       prato: prato,
        //       value: value,
        //       id_restaurant: id_restaurant,
        //     });
        //   }
        // }}
        >
          <TextButton>Não aceitar</TextButton>
        </ButtonArea>
      </Container>
    );
  }
};
