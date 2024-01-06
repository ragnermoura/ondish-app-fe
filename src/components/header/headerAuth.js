import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import config from '../../../assets/config.json';
import BackIcon from '../../../assets/icons/iconBack.svg'

const HeaderArea = styled.View`
margin-top: 50px;
width: 100%;
height: 30px;
align-items: center;
position: relative;
margin-bottom: 20px;
`;

const TitleHeader = styled.Text`
color: ${config.colors.black};
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 900;
line-height: 24px;
letter-spacing: 0.8px;
margin-top: .5%;
`;

const ButtomArea = styled.TouchableOpacity`
position: absolute;
top: 25%;
left: 6%;
z-index: 2;
`;

const TitleArea = styled.View`
width: 100%;
`;

export default ({title}) => {

  const navigation = useNavigation();

    const handleBack = () => {
    navigation.goBack();
  };
  
    return (
        <HeaderArea>
          <ButtomArea onPress={handleBack}>
            <BackIcon/>
          </ButtomArea>
          <TitleArea>
            <TitleHeader>{title}</TitleHeader>
          </TitleArea>
        </HeaderArea>
    );
}