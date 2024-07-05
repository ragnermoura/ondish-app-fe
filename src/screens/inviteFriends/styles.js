import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import ArrowBack from "../../../assets/icons/iconArrowRight.svg";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: ${height - 60}px;
`;

export const BoxInfo = styled.View`
  align-self: center;
  width: 85%;
  align-items: center;
`;

export const ImgGift = styled.Image`
  margin: -15px 0 0 0;
  margin-bottom: 20px;
  border-radius: 10px;
`;
// tava 30px no lugar do -15px

export const Title = styled.Text`
  width: 70%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const InputArea = styled.View`
  width: 90%;
  height: 56px;
  background-color: ${config.colors.input};
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  border: 1px;
  border-color: ${config.colors.borderinput};
`;

// export const IconArrow = styled(ArrowBack)`
//   padding-left: 40px;
// `;

// export const Input = styled.TextInput`
//   width: 100%;
//   font-size: 16px;
//   color: ${config.colors.black};
// `;

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

export const InviteFriendCard = styled.TouchableOpacity`
  width: 90%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(134, 134, 134, 0.2);
`;

export const IconCard = styled.View`
  padding: 2px;
  border-width: 1px;
  border-radius: 30px;
  margin-right: 8px;
  border-color: #a9a9a9;
  align-items: center;
  justify-content: center;
`;

export const ImgFriend = styled.Image`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

export const TextFriend = styled.Text`
  color: #010f07;
  font-size: 16px;
  font-weight: 500;
`;

export const InvitedPersonCard = styled.View`
  align-items: center;
  margin: 40px 0;
  width: 100%;
  min-height: 85px;
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(134, 134, 134, 0.2);
`;

export const InvitedPersonText = styled.Text`
  width: 100%;
  background-color: ${config.colors.input};
  text-align: center;
  color: #010f07;
  font-size: 16px;
  font-weight: 500;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TitleEvent = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

export const InputEvent = styled.TextInput`
  width: 100%;
  background-color: ${config.colors.input};
  height: 50px;
  border-radius: 10px;
  padding-left: 20px;
`;

export const InputEvents = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

export const InputAreaEvent = styled.View`
  width: 100%;
  background-color: ${config.colors.input};
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ViewEvent = styled.View`
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
`;

export const ViewMesaInput = styled.View`
  margin-bottom: 20px;
  align-items: center;
  width: 90%;
`;

export const ViewMesa = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  height: 200px;
  align-items: flex-start;
`;

export const Mesa = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const MesaText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

export const ViewMesaOptions = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
  width: 50%;
`;

export const OptionsMesaInside = styled.View`
  background-color: #96b4e6;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
export const OptionsMesaOut = styled.View`
  background-color: #ed2024;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const TextOptionsInside = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;

export const TextOptionsOut = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
