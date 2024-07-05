import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
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
