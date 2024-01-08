import React from 'react';
import styled from 'styled-components/native';
import config from '../../../assets/config.json'
import Location from '../../../assets/icons/iconLocation.svg'

const ButtonArea = styled.TouchableOpacity`
flex-direction: row;
margin: 25%;
width: 100%;
height: 65px;
flex-shrink: 0;
border-radius: 11px;
justify-content: center;
text-align: center;
align-items: center;
background-color: ${config.colors.whrite};
border: 2px;
margin-top: 35%;
border-color: ${config.colors.red};

`;

const TextButton = styled.Text`
color: ${config.colors.red};
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;

`;

export default ({text}) => {
    return (
        <ButtonArea>
            <Location/>
            <TextButton> {text}</TextButton>
        </ButtonArea>
    );
}