import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import config from '../../../../assets/config.json'


const CardArea = styled.View`
width: 100%;
height: 185px;
border-radius: 11px;
justify-content: center;
padding: 10%;

`;

const Title = styled.Text`
color: ${config.colors.black};
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 36px;
letter-spacing: 0.18px;

`;
const SubTitle = styled.Text`
color: ${config.colors.black};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.4px;
`;




export default ({imagem, title, subtitle }) => {
    return (
        <CardArea>
            {imagem}
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>      
        </CardArea>
    );
}