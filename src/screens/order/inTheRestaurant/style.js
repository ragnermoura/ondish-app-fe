import React from "react";
import styled from "styled-components/native";
import RatingStars from "../../../../assets/icons/iconRating.svg";
import config from "../../../../assets/config.json";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
`;

export const NameTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  width: 60%;
  margin-bottom: 10px;
`;

export const SubTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const SubTitleText = styled.Text`
  font-size: 16px;
  font-weight: regular;
  color: #868686;
  margin-right: 8px;
`;

export const PointSubTitle = styled.Image`
  margin-bottom: -5px;
  margin-right: 8px;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const RatingNumber = styled.Text`
  font-size: 12px;
  margin-right: 5px;
`;

export const RatingStar = styled(RatingStars)`
  margin-right: 5px;
  margin-top: -1.5px;
`;

export const RatingAvaliation = styled.Text`
  font-size: 12px;
  margin-bottom: 35px;
`;

export const OrderCard = styled.View`
  margin-top: 15px;
`;

export const ListOrder = styled.View`
  margin-bottom: 25px;
`;

export const TitleOptions = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;
