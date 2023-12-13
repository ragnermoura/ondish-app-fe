import React from 'react';
import styled from 'styled-components/native';
import config from '../../../assets/config.json'
import Location from '../../../assets/icons/iconLocation.svg'

const ButtonArea = styled.TouchableOpacity`
flex-direction: row;
width: 100%;
height: 50px;
flex-shrink: 0;
border-radius: 11px;
justify-content: center;
align-items: center;
background-color: ${config.colors.whrite};
border: 1px;
border-color: ${config.colors.primary};
`;

const TextButton = styled.Text`
color: ${config.colors.primary};
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;
`;

export default ({text}) => {
    return (
        <ButtonArea>
           <Location/>
            <TextButton>{text}</TextButton>
        </ButtonArea>
    );
}