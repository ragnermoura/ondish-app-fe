import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Label,
  TextLocation,
  AreaQuadro,
  Quadro,
  TextLabelQuadro,
  ImgOne,
} from "./styles";

import api from "../../../services/auth/index";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Label>Entregar para</Label>

      <TextLocation>Setúbal, Portugal</TextLocation>
      <AreaQuadro>
        <Quadro>
          <ImgOne />
          <TextLabelQuadro>Receber em casa</TextLabelQuadro>
        </Quadro>
        <Quadro>
          <TextLabelQuadro>Reservar restaurante</TextLabelQuadro>
        </Quadro>
        <Quadro>
          <TextLabelQuadro>Pedir no restaurante</TextLabelQuadro>
        </Quadro>
      </AreaQuadro>
    </Container>
  );
};
