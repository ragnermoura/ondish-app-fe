import React, { Fragment, useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
  Container,
  NameTitle,
  SubTitle,
  Rating,
  RatingNumber,
  RatingStar,
  RatingAvaliation,
  OrderCard,
  ListOrder,
  TitleOptions,
  SubTitleText,
  PointSubTitle,
} from "./style";
import ThirdButton from "../../../components/buttons/thirdButton";
import Order from "../../../components/cards/order/orderComp";
import { useNavigation } from "@react-navigation/native";
import api from "../../../../services/auth/index";

// fazer a lógica para ao clicar em algum prato e nao estar logado voltar para página de login
export default ({ route }) => {
  const [infoRes, setInfoRes] = useState(null);
  const [bebidasRes, setBebidasRes] = useState(null);
  const navigation = useNavigation();
  const { id } = route.params;
  // console.log(id);
  // const id = 1;

  useEffect(() => {
    api.sendCodeRes(id).then((res) => {
      // console.log(res.status, res.data);
      console.log(res.status);
      if (res.status === 500) {
        // alert("Erro ao buscar restaurante");
        console.log(res.status, res.data);
      } else {
        if (res) {
          console.log(res);
          setInfoRes(res.data);
        } else {
          return;
        }
      }
    });
    api.getBebida(id).then((res) => {
      // console.log(res.status, res.data);
      console.log(res.status);
      if (res.status === 500) {
        // alert("Erro ao buscar bebidas");
        console.log(res.status, res.data);
      } else {
        if (res) {
          setBebidasRes(res.data);
        } else {
          return;
        }
      }
    });
  }, []);

  if (infoRes) {
    const avaliation = Number(infoRes.avaliacoes[0].avaliacao);
    return (
      <ScrollView>
        <Container>
          <NameTitle>{infoRes.nome_restaurante}</NameTitle>
          <SubTitle>
            {infoRes.cozinha_restaurante[0]
              ? infoRes.cozinha_restaurante.map((e) => {
                  return (
                    <Fragment key={e.id_cozinha_restaurante}>
                      <SubTitleText>{e.nome_cozinha}</SubTitleText>
                      <PointSubTitle
                        source={require("../../../../assets/icons/iconPoint.png")}
                      />
                    </Fragment>
                  );
                })
              : ""}
            {/* {infoRes.pratos[0] ? infoRes.pratos[0].cozinha.nome_cozinha : ""}{" "}
            <Image source={require("../../../../assets/icons/iconPoint.png")} />{" "}
            {infoRes.pratos[1] ? infoRes.pratos[1].cozinha.nome_cozinha : ""}{" "}
            <Image source={require("../../../../assets/icons/iconPoint.png")} />{" "}
            {infoRes.pratos[2] ? infoRes.pratos[2].cozinha.nome_cozinha : ""} */}
          </SubTitle>
          <Rating>
            <RatingNumber>{avaliation.toFixed(1)}</RatingNumber>
            <RatingStar />
            <RatingAvaliation>
              {infoRes.avaliacoes.length}+ Avaliações
            </RatingAvaliation>
          </Rating>
          {/* <ThirdButton
            text={"Convidar amigos"}
            onPress={() => navigation.navigate("InviteFriends")}
          /> */}

          <OrderCard>
            <TitleOptions>Diario</TitleOptions>
            <ListOrder>
              {infoRes.pratos.map((e) => {
                if (e.prato_do_dia == 1) {
                  return (
                    <Order
                      title={e.titulo}
                      text={e.descricao}
                      value={e.valor}
                      id_pratos={e.id_pratos}
                      key={e.id_pratos}
                      img={e.fotos[0].foto}
                      id_restaurant={e.id_restaurante}
                    />
                  );
                }
              })}
            </ListOrder>
            <TitleOptions>Varios</TitleOptions>
            <ListOrder>
              {infoRes.pratos.map((e) => {
                if (e.prato_do_dia == 0) {
                  return (
                    <Order
                      title={e.titulo}
                      text={e.descricao}
                      value={e.valor}
                      key={e.id_pratos}
                      img={e.fotos[0].foto}
                      id_restaurant={e.id_restaurante}
                    />
                  );
                }
              })}
              {/* <Order
                title={"Smokey Jollof Rice"}
                text={
                  "Delicious party smokey jollof rice. Serve with choice of protein & sides."
                }
                value={"9,5"}
              />
              <Order
                title={"Classic Fried Rice"}
                text={
                  "Classic original Naija fried rice Serve with choice of protein & sides."
                }
                value={"9,5"}
              />
              <Order
                title={"Special Coconut Rice"}
                text={
                  "Coconut rice with bit of suasage. Serve with choice of protein & sides."
                }
                value={"9,5"}
              /> */}
            </ListOrder>
            <TitleOptions>Bebidas</TitleOptions>
            <ListOrder>
              {/* {bebidasRes.map((e) => {
                return (
                  <Order
                    title={e.titulo}
                    text={e.descricao}
                    value={e.valor}
                    key={e.id_pratos}
                    img={e.fotos[0].foto}
                  />
                );
              })} */}
              {/* <Order
                title={"Red wine"}
                text={
                  "Delicious party smokey jollof rice. Serve with choice of protein & sides."
                }
                value={"9,5"}
              />
              <Order
                title={"Rosé wine"}
                text={
                  "Classic original Naija fried rice Serve with choice of protein & sides."
                }
                value={"9,5"}
              />
              <Order
                title={"Special Coconut Rice"}
                text={
                  "Coconut rice with bit of suasage. Serve with choice of protein & sides."
                }
                value={"9,5"}
              /> */}
            </ListOrder>
          </OrderCard>
        </Container>
      </ScrollView>
    );
  } else {
    return (
      <Container>
        <Text>Sem restaurante Cadastrado</Text>
      </Container>
    );
  }
};
