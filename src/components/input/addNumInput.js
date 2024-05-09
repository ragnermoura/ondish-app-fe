import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import config from '../../../assets/config.json'

import PhoneNumberInput from 'react-native-phone-number-input';


const InputArea = styled.View`
margin-top: 20%;
height: 56px;
border-radius: 6px;
background-color: ${config.colors.input};
align-items: center;
border: 1px solid ${config.colors.borderinput};
`;

const Label = styled.Text`
  font-size: 12px;
  color: #868686;
  font-weight: bold;


`;


export default ({ placeholder, value, onChangeText }) => {
    return (
        <InputArea>
            <PhoneNumberInput
                placeholder={placeholder}
                sttyl
                defaultCode="PT"
                layout="first"
                placeholderTextColor={config.colors.placeholder}
                value={value}
                onChangeText={onChangeText}
                autoFocus
                containerStyle={{flex: 1}} // Ajuste o estilo conforme necessário
                textInputStyle={{
                    flex: 1,
                    fontSize: 16,
                    color: config.colors.black,
                    width: '100% !important',
                    // Inclua outros estilos de TextInput que você deseja aqui
                }}
            />
        </InputArea>
    );
};