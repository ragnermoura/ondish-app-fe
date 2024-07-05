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
// import ThirdButton from "../../../components/buttons/thirdButton";
import Order from "../../../components/cards/order/orderComp";
import { useNavigation } from "@react-navigation/native";
import api from "../../../../services/auth/index";

// fazer a lógica para ao clicar em algum prato e nao estar logado voltar para página de login
export default ({ route }) => {
  const [infoRes, setInfoRes] = useState(null);
  const [platesRes, setPlatesRes] = useState(null);
  const [bebidasRes, setBebidasRes] = useState(null);

  const navigation = useNavigation();
  const { id, sala, salaInfo } = route.params;
  // console.log(id);
  // const id = 1;

  useEffect(() => {
    api.getRestaurant(id).then((res) => {
      // console.log(res.status, res.data);
      // console.log(res.status, "Restaurante");
      if (res.status === 500) {
        // alert("Erro ao buscar restaurante");
        // console.log(res.status, res.data);
      } else {
        if (res) {
          // console.log(res);
          setInfoRes(res.data[0]);
        } else {
          return;
        }
      }
    });

    api.getPlates(id).then((res) => {
      // console.log(res.status, res.data);
      // console.log(res.status, "Pratos");
      // console.log(res);
      if (res.status === 500) {
        // alert("Erro ao buscar bebidas");
        // console.log(res.status, res.data);
      } else {
        if (res) {
          // console.log("teste");
          setPlatesRes(res.data);
        } else {
          return;
        }
      }
    });

    api.getBebida(id).then((res) => {
      // console.log(res.status, res.data);
      // console.log(res.status, "Bebidas");
      if (res.status === 500) {
        // alert("Erro ao buscar bebidas");
        // console.log(res.status, res.data);
      } else {
        if (res) {
          setBebidasRes(res.data);
        } else {
          return;
        }
      }
    });
  }, []);

  // console.log(infoRes);
  // console.log(platesRes);

  if (infoRes) {
    // console.log(platesRes);
    // console.log(infoRes);
    let avaliation = 0;
    let avaliationValue = 0;
    if (infoRes.avaliacoes.length == 0) {
      return;
    } else {
      infoRes.avaliacoes.map((avaliacao) => {
        avaliationValue += avaliacao.avaliacao;
        // console.log(avaliacao.avaliacao);
      });
      avaliationValue = (avaliationValue / infoRes.avaliacoes.length).toFixed(
        1
      );
      // console.log(avaliationValue, infoRes.avaliacoes.length);
    }
    return (
      <ScrollView>
        <Container>
          <NameTitle>{infoRes.nome_restaurante}</NameTitle>
          <SubTitle>
            {platesRes != undefined
              ? platesRes.map((e) => {
                  return (
                    <Fragment
                      key={e.cozinha_restaurante.id_cozinha_restaurante}
                    >
                      <SubTitleText>
                        {e.cozinha_restaurante.nome_cozinha}
                      </SubTitleText>
                      <PointSubTitle
                        source={require("../../../../assets/icons/iconPoint.png")}
                      />
                    </Fragment>
                  );
                })
              : null}
          </SubTitle>
          <Rating>
            <RatingNumber>{avaliationValue}</RatingNumber>
            <RatingStar />
            <RatingAvaliation>
              {infoRes.avaliacoes.length == 0 ? 0 : infoRes.avaliacoes.length}+
              Avaliações
            </RatingAvaliation>
          </Rating>
          {/* <ThirdButton
            text={"Convidar amigos"}
            onPress={() => navigation.navigate("InviteFriends")}
          /> */}

          <OrderCard>
            <TitleOptions>Diario</TitleOptions>
            <ListOrder>
              {platesRes != undefined
                ? platesRes.map((e) => {
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
                          bebida={false}
                          sala={sala == null ? null : sala}
                          salaInfo={sala == null ? null : salaInfo}
                        />
                      );
                    }
                  })
                : null}
            </ListOrder>
            <TitleOptions>Varios</TitleOptions>
            <ListOrder>
              {platesRes != undefined
                ? platesRes.map((e) => {
                    if (e.prato_do_dia == 2) {
                      return (
                        <Order
                          title={e.titulo}
                          text={e.descricao}
                          value={e.valor}
                          id_pratos={e.id_pratos}
                          key={e.id_pratos}
                          img={e.fotos[0].foto}
                          id_restaurant={e.id_restaurante}
                          bebida={false}
                          sala={sala == null ? null : sala}
                          salaInfo={sala == null ? null : salaInfo}
                        />
                      );
                    }
                  })
                : null}
            </ListOrder>
            <TitleOptions>Bebidas</TitleOptions>
            <ListOrder>
              {bebidasRes != undefined
                ? bebidasRes.map((e) => {
                    console.log("esta e a sala", sala);
                    return (
                      <Order
                        title={e.titulo}
                        text={e.descricao}
                        value={e.valor}
                        id_pratos={e.id_bebida}
                        key={e.id_bebida}
                        img={e.fotos.length == 0 ? null : e.fotos[0].foto}
                        id_restaurant={e.id_restaurante}
                        bebida={true}
                        sala={sala == null ? null : sala}
                        salaInfo={sala == null ? null : salaInfo}
                      />
                    );
                  })
                : null}
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
