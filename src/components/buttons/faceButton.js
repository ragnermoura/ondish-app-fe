import React from 'react';
import styled from 'styled-components/native';
import config from '../../../assets/config.json';
import IconFB from '../../../assets/icons/iconFacebook.svg';
import { View } from "react-native";

const ButtonArea = styled.TouchableOpacity`
width: 100%;
height: 50px;
flex-shrink: 0;
border-radius: 11px;
justify-content: center;
align-items: center;
background-color: ${config.colors.facebook};
margin-bottom: 20px;

`;

const TextButton = styled.Text`
color: ${config.colors.whrite};
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.8px;
text-transform: uppercase;
`;

const IconArea = styled.View`
position: absolute;
left: 5%;
z-index: 2;
`;

export default ({text}) => {
    return (
        <ButtonArea>
          <IconArea>
          <IconFB width={30} height={30} fill={config.colors.whrite} />
          </IconArea>
          <TextButton>{text}</TextButton>
          
        </ButtonArea>
    );
}