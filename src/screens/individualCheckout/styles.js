import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
`;

export const ButtonInvite = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 2%;
  margin-bottom: 40px;
`;

export const TextInvite = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.red};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${config.colors.black};
  margin-bottom: 12px;
`;

export const InfoCard = styled.View`
  margin-bottom: 12px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
  padding: 6px 0;
`;

export const InfoTextHighlighted = styled.Text`
  color: ${config.colors.red};
`;

export const PerfilCard = styled.View`
  flex-direction: row;
  padding-bottom: 5px;
  align-items: center;
  margin-bottom: 15px;
`;

export const PerfilImg = styled.Image`
  margin-right: 15px;
`;

export const PerfilName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
`;

export const CardOrder = styled.View`
  margin-bottom: 25px;
`;

export const SubTotalCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const SubTotalTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.black};
`;

export const SubTotalValue = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.black};
`;

export const BoxButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.red};
`;

export const ViewMargin = styled.View`
  margin-bottom: 30px;
`;
