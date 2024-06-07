import React from "react";
import styled from "styled-components/native";
import config from "../../../assets/config.json";
import Profile from "../../../assets/icons/profile.svg";
import IconArrowRight from "../../../assets/icons/iconBackRight.svg";
import Lock from "../../../assets/icons/iconLock.svg";
import BlackCard from "../../../assets/icons/iconBackBlackCard.svg";
import Location from "../../../assets/icons/IconMarker.svg";
import ArrowBox from "../../../assets/icons/iconArrowBox.svg";
import RatingStar from "../../../assets/icons/iconRating.svg";
import FAQ from "../../../assets/icons/iconFAQ.svg";
import Logout from "../../../assets/icons/iconLogout.svg";

export const Container = styled.SafeAreaView`
  padding: 5%;
  background-color: white;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${config.colors.black};
  margin-bottom: 10px;
  width: 50%;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${config.colors.placeholder};
  margin-bottom: 18px;
`;

export const ProfileOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const IconProfile = styled(Profile)`
  margin-right: 15px;
`;

export const IconLock = styled(Lock)`
  margin-right: 26px;
  margin-left: 10px;
`;

export const IconBlackCard = styled(BlackCard)`
  margin-right: 20px;
  margin-left: 7px;
`;

export const IconLocation = styled(Location)`
  margin-right: 24px;
  margin-left: 13px;
`;

export const IconArrowBox = styled(ArrowBox)`
  margin-right: 20px;
  margin-left: 13px;
`;

export const IconRatingstar = styled(RatingStar)`
  margin-right: 22px;
  margin-left: 6px;
`;

export const IconFAQ = styled(FAQ)`
  margin-right: 25px;
  margin-left: 12px;
`;

export const IconLogout = styled(Logout)`
  margin-right: 21px;
  margin-left: 15px;
`;

export const IconArrow = styled(IconArrowRight)`
  position: absolute;
  align-items: center;
  right: 10px;
  margin-right: 10px;
`;

export const ProfileOptionCard = styled.View`
  border-bottom-width: 1px;
  width: 87%;
  border-color: rgba(134, 134, 134, 0.3);
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  postion: relative;
`;

export const ProfileOptionTextCard = styled.View``;

export const ProfileOptionTitle = styled.Text`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
  color: ${config.colors.black};
`;

export const ProfileOptionSubTitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${config.colors.placeholder};
`;

export const MoreCard = styled.View`
  margin-top: 25px;
`;

export const MoreCardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${config.colors.black};
  margin-left: 6px;
`;
