import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

const ButtonArea = styled.TouchableOpacity`
  height: 60px;
  width: 45%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const TextButton = styled.Text`
  width: 60%;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
`;

export default ({ text, onPress, clicked }) => {
  if (clicked == false) {
    return (
      <ButtonArea style={{ backgroundColor: "#d9d9d9" }} onPress={onPress}>
        <TextButton style={{ color: "#8b8b8b" }}>{text}</TextButton>
      </ButtonArea>
    );
  } else {
    return (
      <ButtonArea style={{ backgroundColor: "#ffeaed" }} onPress={onPress}>
        <TextButton style={{ color: "#ed2024" }}>{text}</TextButton>
      </ButtonArea>
    );
  }
};
