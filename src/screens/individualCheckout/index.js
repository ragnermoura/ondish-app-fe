import React, { useEffect, useState } from "react";
import {
  ButtonInvite,
  Title,
  Container,
  InfoText,
  InfoTextHighlighted,
  TextInvite,
  InfoCard,
  PerfilCard,
  PerfilImg,
  PerfilName,
  CardOrder,
  SubTotalCard,
  SubTotalTitle,
  SubTotalValue,
  BoxButton,
  TextButton,
  ViewMargin,
  IconCard,
  TextMesa,
  ViewMesa,
} from "./styles";
import {
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OrderCheckout from "../../components/cards/orderCheckout/orderCheckout";
import IconBackRight from "../../../assets/icons/iconBackRight.svg";
import MainButton from "../../components/buttons/mainButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../services/auth/index";
import IconUser from "../../../assets/icons/profile.svg";
import { baseUrl } from "../../../services/config";

export default ({ route }) => {
  const [subTotal, setSubTotal] = useState(29.4);
  const [pedido, setPedido] = useState(null);
  const [infoRes, setInfoRes] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [randomNumber, setRandomNumber] = useState(0);

  const navigation = useNavigation();

  const savePedidos = (name, value, opcao1, opcao2, id_restaurant) => {
    setPedido(name, value, opcao1, opcao2, id_restaurant);
  };

  const { quantidade, sala, mesa } = route.params;

  useEffect(() => {
    const getObject = async (key) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (error) {
        console.error("Error retrieving object", error);
      }
      return null;
    };

    getObject("prato").then((name, value, opcao1, opcao2, id_restaurant) =>
      savePedidos(name, value, opcao1, opcao2, id_restaurant)
    );
    getObject("perfil").then((perfil) => setPerfil(perfil));
    const newRandomNumber = Math.floor(Math.random() * 1000) + 1; // Gera um número entre 1 e 1000
    setRandomNumber(newRandomNumber);
  }, []);
  // console.log(perfil);

  useEffect(() => {
    if (pedido != null) {
      api.getRestaurant(pedido.id_restaurant).then((res) => {
        if (res) {
          setInfoRes(res.data[0]);
        } else {
          return;
        }
      });
      setSubTotal(pedido.value);
    }
  }, [pedido]);

  const handleCheckout = () => {
    if (quantidade == 1) {
      navigation.navigate("CheckoutFinal", { quantidade: 1 });
    } else {
      navigation.navigate("CheckoutFinal", { quantidade: quantidade });
    }
  };

  if (infoRes) {
    return (
      <ScrollView>
        <Container>
          <StatusBar
            barStyle={"dark-content"}
            translucent={true}
            backgroundColor={"transparent"}
          />
          {/* <ButtonInvite onPress={() => navigation.navigate("InviteFriends")}>
            <TextInvite>Convidar amigos</TextInvite>
          </ButtonInvite> */}
          {/* alterar o nome para quando tiver o perfil */}
          <Title>Cliente {perfil.perfil.nome}</Title>
          {/* <Title>Cliente Idrikson</Title> */}
          <InfoCard>
            <InfoText>
              Restaurante:{" "}
              <InfoTextHighlighted>
                {infoRes.nome_restaurante}
              </InfoTextHighlighted>
            </InfoText>
            <InfoText>
              Pedido nº:{" "}
              <InfoTextHighlighted>{randomNumber}</InfoTextHighlighted>
            </InfoText>
            <InfoText>
              {/* criar um filtro que mostra quais mesas estao disponiveis com base no que vem da api  */}
              Mesa: <InfoTextHighlighted>{mesa.numero}</InfoTextHighlighted>{" "}
              <ViewMesa
                style={{
                  backgroundColor:
                    mesa.localizacao === 1 ? "#BFD9FE" : "#ed2024",
                }}
              >
                <TextMesa>
                  {mesa.localizacao === 1 ? "dentro" : "fora"}
                </TextMesa>
              </ViewMesa>
            </InfoText>
          </InfoCard>
          <Title>Pedidos na mesa</Title>
          {quantidade == "1" ? (
            <View>
              <PerfilCard>
                {perfil.perfil.avatar == "/avatar/default-avatar.png" ? (
                  <IconCard>
                    <IconUser />
                  </IconCard>
                ) : (
                  <PerfilImg
                    source={{
                      uri: `${baseUrl}/public/${perfil.perfil.avatar}`,
                    }}
                  />
                )}
                <PerfilName>
                  {perfil.perfil.nome} {perfil.perfil.sobrenome}
                </PerfilName>
              </PerfilCard>
              <CardOrder>
                <OrderCheckout
                  number={1}
                  title={pedido.name}
                  text={
                    pedido.opcao2 == "" && pedido.opcao1 == ""
                      ? ""
                      : `${pedido.opcao1}, ${pedido.opcao2}`
                  }
                  value={`${pedido.value}€`}
                />
              </CardOrder>
            </View>
          ) : (
            <View>
              <View>
                <PerfilCard>
                  {perfil.perfil.avatar == "/avatar/default-avatar.png" ? (
                    <IconCard>
                      <IconUser />
                    </IconCard>
                  ) : (
                    <PerfilImg
                      source={{
                        uri: `${baseUrl}/public/${perfil.perfil.avatar}`,
                      }}
                    />
                  )}
                  <PerfilName>
                    {perfil.perfil.nome} {perfil.perfil.sobrenome}
                  </PerfilName>
                </PerfilCard>
                <CardOrder>
                  <OrderCheckout
                    number={1}
                    title={pedido.name}
                    text={
                      pedido.opcao2 == "" && pedido.opcao1 == ""
                        ? ""
                        : `${pedido.opcao1}, ${pedido.opcao2}`
                    }
                    value={`${pedido.value}€`}
                  />
                </CardOrder>
              </View>

              {/* terminar a logica abaixo quando estiver feito a parte de convidar outras pessoas */}
              {/* {Number(quantidade) > 1
                ? () => {
                    for (let i = 0; i <= quantidade; i++) {
                      console.log("entrou aqui");
                      return (
                        <View>
                          <PerfilCard>
                            <PerfilImg
                              source={require("../../../assets/images/perfilImg2.png")}
                            />
                            <PerfilName>Rodney Miller</PerfilName>
                          </PerfilCard>
                          <CardOrder>
                            <OrderCheckout
                              number={1}
                              title={"Combo Burger"}
                              text={
                                "Shortbread, chocolate turtle cookies, and red velvet"
                              }
                              value={`${7.4}€`}
                            />
                          </CardOrder>
                        </View>
                      );
                    }
                  }
                : console.log("entrou aqui 1")} */}
            </View>
          )}

          <SubTotalCard>
            <SubTotalTitle>SubTotal</SubTotalTitle>
            <SubTotalValue>{subTotal}€</SubTotalValue>
          </SubTotalCard>

          <BoxButton>
            {/* voltar pra AddOrder e ficar como se fosse um editar */}
            <TextButton>Adicionar mais itens</TextButton>
            <IconBackRight />
          </BoxButton>
          {/* <BoxButton onPress={() => navigation.navigate("ExchangeOrders")}>
            <TextButton>Trocar pedidos</TextButton>
            <IconBackRight />
          </BoxButton> */}

          <ViewMargin></ViewMargin>

          <MainButton
            text={"Acompanhar Pedido"}
            onPress={() => handleCheckout()}
          />
        </Container>
      </ScrollView>
    );
  }
};
