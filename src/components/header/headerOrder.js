import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import config from "../../../assets/config.json";
import BackIcon from "../../../assets/icons/iconBack.svg";
import CloseIcon from "../../../assets/icons/iconMinClose.svg";
import SearchIcon from "../../../assets/icons/blackSearch.svg";

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
  margin-top: 0.5%;
`;

const ButtomAreaRight = styled.TouchableOpacity`
  position: absolute;
  top: 25%;
  left: 6%;
  z-index: 2;
`;

const ButtomAreaLeft = styled.TouchableOpacity`
  position: absolute;
  top: -10%;
  right: 6%;
  z-index: 2;
`;
const MinCloseIcon = styled(CloseIcon)`
  margin-top: -25%;
`;

const TitleArea = styled.View`
  width: 100%;
`;

export default ({ title, iconRight, iconLeft }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("MainTab", { screen: "OrderInTheRestaurant" });
    }
  };
  return (
    <HeaderArea>
      <ButtomAreaRight onPress={handleBack}>
        {iconLeft == "back" ? <BackIcon /> : <MinCloseIcon />}
      </ButtomAreaRight>
      <TitleArea>
        <TitleHeader>{title}</TitleHeader>
      </TitleArea>
      <ButtomAreaLeft>
        {iconRight == "close" ? <></> : <SearchIcon />}
      </ButtomAreaLeft>
    </HeaderArea>
  );
};
