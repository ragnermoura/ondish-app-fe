import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import ImgEntrega from '../../../assets/icons/image_1.svg'

export const Container = styled.SafeAreaView`
  padding: 10%;
  background-color: white;
  flex: 1;
`;

export const Label = styled.Text`
  margin-top: 2%;
  font-size: 14px;
  padding-left: 10%;
  color: ${config.colors.black};
`;
export const TextLocation = styled.Text`
  font-size: 14px;
  padding-left: 10%;
  font-weight: 800;
  color: ${config.colors.black};
`;

export const AreaQuadro = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 4%;
  padding: 2%;
`;

export const Quadro = styled.View`
  background-color: ${config.colors.secondary};
  border-radius: 6px;
  width: 114px;
  height: 114px;
  margin-right: 2%;
`;

export const TextLabelQuadro = styled.Text`
  font-size: 13px;
  bottom: 0;
  position: absolute;
  margin-bottom: 5%;
  padding-left: 10%;
  text-align: center;
  font-weight: 800;
  color: ${config.colors.black};
`;

export const ImgOne = styled(ImgEntrega)`
align-self: center;
position: absolute;
top: 0;
margin-top: 10%;
margin-bottom: auto;
`;
