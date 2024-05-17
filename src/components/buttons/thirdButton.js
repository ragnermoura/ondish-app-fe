import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

const ButtonArea = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 11px;
  justify-content: center;
  align-items: center;
  background-color: ${config.colors.whrite};
  margin-bottom: 20px;
  border: 1px;
  border-color: ${config.colors.red};
  border-radius: 8px;
`;

const TextButton = styled.Text`
  color: ${config.colors.red};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export default ({ text, onPress }) => {
  return (
    <ButtonArea onPress={onPress}>
      <TextButton>{text}</TextButton>
    </ButtonArea>
  );
};
