import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import ImgEntrega from "../../../assets/icons/image_1.svg";
import { Entypo } from "@expo/vector-icons";

export const Container = styled.SafeAreaView`
  padding-top: 10%;
  padding-left: 4%;
  background-color: #fff;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text`
  margin-top: 2%;
  font-size: 14px;
  color: ${config.colors.black};
`;

export const CardLocation = styled.View`
  flex-direction: row;
`;

export const TextLocation = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: ${config.colors.black};
  margin-right: 5px;
`;

export const ArrowDown = styled(Entypo)`
  margin-top: 1px;
`;

export const CardNotification = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const PopupNotification = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: red;
  position: absolute;
  top: -1px;
  left: 1px;
`;

export const NumberNot = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  align-self: center;
  margin-top: -2px;
`;

export const AreaQuadro = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 4%;
  margin-bottom: 10%;
  padding-top: 6%;
`;

export const Quadro = styled.View`
  background-color: ${config.colors.secondary};
  border-radius: 6px;
  width: 114px;
  height: 114px;
  margin-right: 2%;
  align-items: center;
`;

export const TextLabelQuadro = styled.Text`
  font-size: 13px;
  margin-bottom: 5%;
  text-align: center;
  font-weight: 800;
  width: 70%;
  color: ${config.colors.black};
`;

export const ImgOne = styled(ImgEntrega)`
  align-self: center;
  margin-top: 10%;
  margin-bottom: auto;
`;

export const CardImgAd = styled.View`
  width: 95%;
  margin-bottom: 8%;
`;

export const ImgAd = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 10px;
`;

export const TextAd = styled.Text`
  width: 40%;
  position: absolute;
  top: 30px;
  left: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

export const ReserveChampions = styled.View`
  margin-bottom: 30px;
`;

export const TitleReserve = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ImgBanner = styled.View`
  width: 150px;
  height: 150px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;
