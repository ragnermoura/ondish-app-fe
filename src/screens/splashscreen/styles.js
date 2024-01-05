import React from "react";
import styled from "styled-components/native";
import LogoImage from '../../../assets/images/logo.svg';


export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex:  1;
`;

export const Logo = styled(LogoImage)`
align-self: center;
margin-top: auto;
margin-bottom: auto;
`;


export const LoadingIcon = styled.ActivityIndicator`
`;

