import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

import Marker from "../../../assets/icons/IconMarker.svg";

const InputArea = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 6px;
  background-color: ${config.colors.input};
  flex-direction: row;
  padding-right: 15px;
  padding-left: 15px;
  align-items: center;
  border: 1px;
  border-color: ${config.colors.borderinput};
`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${config.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-left: 10px;
`;

const MarkerIcon = styled(Marker)`
  padding-left: 20px;
`;

export default ({ placeholder, value, onChangeText }) => {
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({});
  }, []);

  return (
    <InputArea>
      <MarkerIcon width="24" height="24" />
      <Input
        placeholder={placeholder}
        placeholderTextColor={config.colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        ref={inputElementRef}
      />
    </InputArea>
  );
};
