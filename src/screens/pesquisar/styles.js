import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
`;

export const CardButton = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const CardBanner = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-right: 15px;
  align-items: center;
  justify-content: space-between;
`;
