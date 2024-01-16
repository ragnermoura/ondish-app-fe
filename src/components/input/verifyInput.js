import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import config from '../../../assets/config.json'

import Marker from '../../../assets/icons/IconMarker.svg'

const InputArea = styled.View`
width: 20%;
height: 50px;
`;

const Input = styled.TextInput`
font-size: 16px;
padding: 10px;
background-color: ${config.colors.input} ;
color: ${config.colors.black};
font-weight: 400;
text-align: center;
border-bottom-width: 1px; 
border-bottom-color: ${config.colors.dark};
`;

const MarkerIcon = styled(Marker)`
  padding-left: 20px;
  
`;

export default ({ placeholder, value, onChangeText }) => {
    

    const inputElementRef = useRef(null);

    useEffect(() => {
        inputElementRef.current.setNativeProps({
        });
    }, []);


    return (
        <InputArea>
            <Input
                placeholder={placeholder}
                placeholderTextColor={config.colors.placeholder}
                value={value}
                onChangeText={onChangeText}
                ref={inputElementRef}
            />
        </InputArea>
    );
}