import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import ArrowBack from "../../../assets/icons/iconArrowRight.svg";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const BoxInfo = styled.View`
  width: 100%;
  align-items: center;
`;

export const ImgGift = styled.Image`
  margin: 30px 30% 15px 0;
`;

export const Title = styled.Text`
  width: 70%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const InputArea = styled.View`
  width: 70%;
  height: 56px;
  background-color: ${config.colors.input};
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  border: 1px;
  border-color: ${config.colors.borderinput};
`;

export const IconArrow = styled(ArrowBack)`
  padding-left: 40px;
`;

export const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  color: ${config.colors.black};
`;

export const BoxButton = styled.View`
  width: 100%;
`;

export const ButtonArea = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 11px;
  justify-content: center;
  align-items: center;
  background-color: ${config.colors.whrite};
  margin-bottom: 20px;
  border: 1px;
  border-color: rgba(1, 15, 7, 0.2);
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #010f07;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;
