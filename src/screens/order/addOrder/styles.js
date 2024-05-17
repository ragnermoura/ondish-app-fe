import React from "react";
import styled from "styled-components/native";
import config from "../../../../assets/config.json";
import ArrowBack from "../../../../assets/icons/iconBackRight.svg";

export const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

export const ImgBackground = styled.ImageBackground`
  resize-mode: cover;
`;

export const Header = styled.View`
  height: 290px;
`;

export const ButtonBack = styled.TouchableOpacity`
  margin-left: 5%;
  margin-top: 15%;
`;

export const InfoFood = styled.View`
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 0 5%;
  height: 130px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #010f07;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: rgba(1, 15, 7, 0.65);
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: regular;
  color: #868686;
  margin-bottom: 15px;
`;

export const OptionsCard = styled.View`
  padding: 0 5%;
  margin-bottom: 50px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleOptions = styled.Text`
  width: 70%;
  font-size: 20px;
  font-weight: 500;
  color: #010f07;
`;

export const RequiredCard = styled.View`
  background-color: #fcecd5;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const RequiredText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #ef9920;
`;

export const AreaInput = styled.View`
  margin: 0 5%;
  margin-bottom: 35px;
  border-bottom-width: 1px;
  border-color: rgba(151, 151, 151, 0.5);
  position: relative;
`;

export const Input = styled.TextInput`
  width: 90%;
  padding: 16px 0;
  color: #010f07;
`;

export const IconBack = styled(ArrowBack)`
  position: absolute;
  right: 2%;
  top: 30%;
`;

export const BoxButtonQ = styled.View`
  width: 100%;
  padding: 0 5%;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonArea = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  border-radius: 55px;
  align-items: center;
  justify-content: center;
  background-color: rgba(151, 151, 151, 0.1);
`;

export const TextQ = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin: 0 15px;
`;

export const BoxButtonAdd = styled.View`
  padding: 0 5%;
`;
