import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
`;

export const UserCard = styled.View`
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const UserImg = styled.Image`
  margin-right: 12px;
`;

export const UserText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
`;

export const OrdersCard = styled.View`
  margin-bottom: 10%;
`;

export const TotalTable = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const TotalTableText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.black};
`;

export const TotalTableValue = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.black};
`;

export const AmountPay = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const AmountPayText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
`;

export const TextIncl = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.black};
`;

export const AmountPayValue = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
`;

export const PromotionalCode = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: rgba(134, 134, 134, 0.2);
  padding: 15px 0;
  margin-bottom: 30px;
`;

export const PromotionalCodeText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
`;

export const Payment = styled.View`
  width: 100%;
  margin-bottom: 60px;
`;

export const PaymentTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

export const PaymentMethod = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(134, 134, 134, 0.2);
  padding-bottom: 20px;
`;

export const ChooseMethod = styled.Text`
  width: 75%;
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
  text-align: left;
`;
