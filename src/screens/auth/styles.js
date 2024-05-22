import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import Qrcode from "../../../assets/icons/iconQr.svg";

export const Container = styled.SafeAreaView`
  margin: 5%;

  margin-top: 2%;
`;

export const Title = styled.Text`
  font-size: 34px;
  color: #010f07;
  font-weight: bold;
  margin-bottom: 10px;
  max-width: 85%;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: #010f07;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #868686;
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: -15%;
`;

export const Subtext = styled.Text`
  font-size: 16px;
  color: #868686;
  max-width: 80%;
  margin-bottom: 20px;
  align-items: center;
`;
export const SpanText = styled.Text`
  font-size: 16px;
  color: ${config.colors.red};
  margin-bottom: -5px;
`;

export const SpanText2 = styled.Text`
  font-size: 12px;
  color: ${config.colors.red};
`;

export const TextSimple = styled.Text`
  color: #010f07;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const TextSub = styled.Text`
  color: #010f07;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Linked = styled.TouchableOpacity``;

export const ViewClick = styled.TouchableOpacity``;

export const InputArea = styled.View`
  margin-top: 2%;
`;

export const InputPassword = styled.View`
  margin-top: 9px;
`;
export const InputSimple = styled.View`
  margin-top: 9px;
`;

export const CustomButtonRegister = styled.TouchableOpacity`
  height: 45px;
  border: solid 2px;
  border-color: #fff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const CustomButtonQrcode = styled.TouchableOpacity`
  border-top: 10%;
`;

export const Iconqrcode = styled(Qrcode)`
  align-self: center;
`;

export const TextSimpleArea = styled.View`
  background-color: ${config.colors.red};
  align-self: center;
  border-radius: 10px;
  margin-top: 4%;
  padding: 7px;
`;

export const TextSimpleQr = styled.Text`
  font-size: 14px;

  font-weight: 400;
  text-align: center;
  color: ${config.colors.whrite};
`;

export const Spacing = styled.View`
  margin-bottom: 40px;
`;
