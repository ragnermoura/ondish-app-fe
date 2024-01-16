import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import config from '../../../assets/config.json'

import Eye from '../../../assets/icons/iconEye.svg'
import Phone from '../../../assets/icons/iconPhone.svg'


const InputArea = styled.View`
width: 100%;
height: 56px;
border-radius: 6px;
background-color: ${config.colors.input} ;
flex-direction: row;
padding-right: 15px;
padding-left: 15px;
align-items: center;
border: 1px;
border-color: ${config.colors.borderinput};

`;
const Input = styled.TextInput`
flex: 1;
font-size: 16px;
color: ${config.colors.black};
font-size: 16px;
font-style: normal;
font-weight: 400;
margin-left: 10px;
`;

const EyeIcon = styled(Eye)`
  padding-left: 60px;
  
`;
const PhoneIcon = styled(Phone)`
  padding-left: 60px;
  
`;

export default ({ placeholder, value, onChangeText, isPassword }) => {
    const [password, setPassword] = useState(true);
    const togglePasswordVisiblity = () => {
        setPassword(password ? false : true);
    };

    const inputElementRef = useRef(null);

    useEffect(() => {
        inputElementRef.current.setNativeProps({
        });
    }, []);

    const IconVisible = () => {
        if (isPassword) {
            return (
                <EyeIcon
                    width="20"
                    height="20"
                    fill="#444"
                    onPress={togglePasswordVisiblity}
                />
            );
        } else {
            return (
                <PhoneIcon
                    width="24"
                    height="24"
                />
            )

        }
    };

    return (
        <InputArea>
            <Input
                placeholder={placeholder}
                placeholderTextColor={config.colors.placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isPassword ? password : false}
                ref={inputElementRef}
            />

            {IconVisible()}
        </InputArea>
    );
}