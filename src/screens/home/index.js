import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Label,
  TextLocation,
  AreaQuadro,
  Quadro,
  TextLabelQuadro,
  ImgOne,
  Header,
  CardLocation,
  ArrowDown,
  CardNotification,
  PopupNotification,
  NumberNot,
  CardImgAd,
  TextAd,
  ImgAd,
  ReserveChampions,
  TitleReserve,
  ImgBanner,
} from "./styles";

import api from "../../../services/auth/index";
import { getBehaviorAsync } from "expo-navigation-bar";
import { FlatList, ScrollView, View } from "react-native";
import Banner from "../../components/cards/bannerOrder/bannerOrderComp";
import { Ionicons } from "@expo/vector-icons";

export default () => {
  const [notificationNumber, setNotificationNumber] = useState(1);

  const navigation = useNavigation();

  const reserva = [
    {
      id: 1,
      title: "Coockie Sandwich",
      subtitle: "Chinese",
    },
    {
      id: 2,
      title: "Chown Fun",
      subtitle: "Chinese",
    },
    {
      id: 3,
      title: "Dim Sum",
      subtitle: "Chinese",
    },
  ];

  return (
    <ScrollView>
      <Container>
        <Header>
          <View>
            <Label>Entregar para</Label>
            <CardLocation>
              <TextLocation>Setúbal, Portugal</TextLocation>
              <ArrowDown name="chevron-small-down" size={24} />
            </CardLocation>
          </View>
          <CardNotification>
            <Ionicons name="notifications" size={24} />
            <PopupNotification>
              <NumberNot>{notificationNumber}</NumberNot>
            </PopupNotification>
          </CardNotification>
        </Header>

        <AreaQuadro>
          <Quadro>
            <ImgOne />
            <TextLabelQuadro>Receber em casa</TextLabelQuadro>
          </Quadro>
          <Quadro>
            <ImgOne />
            <TextLabelQuadro>Reservar restaurante</TextLabelQuadro>
          </Quadro>
          <Quadro>
            <ImgOne />
            <TextLabelQuadro>Pedir no restaurante</TextLabelQuadro>
          </Quadro>
        </AreaQuadro>

        <CardImgAd>
          <ImgAd source={require("../../../assets/images/exemple.png")} />
          <TextAd>Desfrute dos melhores restaurantes</TextAd>
        </CardImgAd>

        <ReserveChampions>
          <TitleReserve>Campeões de reserva</TitleReserve>
          <FlatList
            data={reserva}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Banner
                imagem={<ImgBanner />}
                title={item.title}
                subtitle={item.subtitle}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ReserveChampions>

        <ReserveChampions>
          <TitleReserve>Campeões de entrega</TitleReserve>
          <FlatList
            data={reserva}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Banner
                imagem={<ImgBanner />}
                title={item.title}
                subtitle={item.subtitle}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ReserveChampions>
      </Container>
    </ScrollView>
  );
};
