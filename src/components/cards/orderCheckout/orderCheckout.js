import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import config from "../../../../assets/config.json";

export default ({ number, title, text, value }) => {
  return (
    <Container>
      <CardNumber>
        <Number>{number == 0 ? null : number}</Number>
      </CardNumber>
      <CardText>
        <Title>{title}</Title>
        <TextOrder>{text}</TextOrder>
      </CardText>
      <Value>{value}</Value>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 5px;
  border-bottom-width: 1px;
  border-color: rgba(134, 134, 134, 0.2);
`;

const CardNumber = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: rgba(134, 134, 134, 0.3);
`;

const Number = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.red};
`;

const CardText = styled.View`
  justify-content: space-between;
  width: 70%;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${config.colors.black};
  margin-bottom: 6px;
`;

const TextOrder = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: rgba(1, 15, 7, 0.65);
`;

const Value = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${config.colors.red};
`;
