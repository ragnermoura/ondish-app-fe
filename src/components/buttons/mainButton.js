import React from 'react';
import styled from 'styled-components/native';
import config from '../../../assets/config.json'

const ButtonArea = styled.TouchableOpacity`
width: 100%;
height: 50px;
flex-shrink: 0;
border-radius: 11px;
justify-content: center;
align-items: center;
background-color: ${config.colors.red};
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

const LoadingIcon = styled.ActivityIndicator`
`;

export default ({ text, onPress, isLoading }) => {

    if (isLoading) {
        return (
            <ButtonArea>
                <LoadingIcon size="small" color="#fff" />
            </ButtonArea>
        );
    } else {
        return (
            <ButtonArea onPress={onPress}>
                <TextButton>{text}</TextButton>
            </ButtonArea>
        );
    }

}