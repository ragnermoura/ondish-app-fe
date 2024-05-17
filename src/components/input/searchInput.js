import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import Search from "../../../assets/icons/search.svg";

export default ({ placeholder, value, onChangeText }) => {
  return (
    <InputArea>
      <SearchIcon width="30" height="40" fill="#444" />
      <Input
        placeholder={placeholder}
        placeholderTextColor={config.colors.placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </InputArea>
  );
};

const InputArea = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${config.colors.input};
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  border: 1px;
  border-color: ${config.colors.borderinput};
`;

const SearchIcon = styled(Search)`
  padding-left: 60px;
`;

const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  margin-left: 10px;
  color: ${config.colors.black};
`;
