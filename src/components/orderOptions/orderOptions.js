import React, { useState } from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";

export default ({ name }) => {
  const [checked, setChecked] = useState(false);

  const selectOption = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <CheckCard
        onPress={() => selectOption()}
        style={{
          borderColor: checked
            ? "rgba(255, 0, 0, 0.5)"
            : "rgba(134, 134, 134, 0.8)",
        }}
      >
        <Check
          style={{
            backgroundColor: checked ? "#ed2024" : "#fff",
          }}
        ></Check>
      </CheckCard>
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(151, 151, 151, 0.5);
  padding: 16px 0;
`;

const CheckCard = styled.TouchableOpacity`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 1px;
  border-color: rgba(255, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const Check = styled.View`
  background-color: red;
  width: 18px;
  height: 18px;
  border-radius: 18px;
`;

const Name = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
