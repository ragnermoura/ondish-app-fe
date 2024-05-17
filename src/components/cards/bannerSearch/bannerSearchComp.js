import React from "react";
import styled from "styled-components/native";
import config from "../../../../assets/config.json";

const CardArea = styled.View`
  width: 48%;
  height: 280px;
  border-radius: 11px;
  justify-content: center;
  margin-bottom: 15px;
`;

const BackgroundImg = styled.View`
  width: 100%;
  height: 80%;
  border-radius: 11px;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: flex-end;
`;

const CardFree = styled.View`
  width: 90%;
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`;

const ImgFast = styled.Image`
  width: 18px;
  height: 15px;
  margin-right: 7px;
`;

const TextTime = styled.Text`
  color: #fff;
`;

const CardValueInfo = styled.View`
  width: 90%;
  flex-direction: row;
  margin-bottom: 13px;
  align-items: center;
  justify-content: space-between;
`;

const CardFast = styled.View`
  flex-direction: row;
`;

const ImgFree = styled.Image`
  width: 20px;
  height: 18px;
  margin-right: 5px;
`;

const TextFree = styled.Text`
  color: #fff;
`;

const CardNote = styled.View`
  background-color: red;
  width: 40px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const Note = styled.Text`
  color: #fff;
`;

const Title = styled.Text`
  color: ${config.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.18px;
`;

const SubTitle = styled.Text`
  color: ${config.colors.placeholder};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

export default ({ imagem, title, subtitle }) => {
  return (
    <CardArea>
      <BackgroundImg>
        <CardFree>
          <ImgFast
            source={require("../../../../assets/icons/iconFastDelivery.png")}
          />
          <TextTime>25 min</TextTime>
        </CardFree>
        <CardValueInfo>
          <CardFast>
            <ImgFree
              source={require("../../../../assets/icons/iconFreeDelivery.png")}
            />
            <TextFree>Free</TextFree>
          </CardFast>
          <CardNote>
            <Note>4.5</Note>
          </CardNote>
        </CardValueInfo>
      </BackgroundImg>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </CardArea>
  );
};
