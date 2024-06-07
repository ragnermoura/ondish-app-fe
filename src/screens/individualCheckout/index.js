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

export default ({ route }) => {
  const [subTotal, setSubTotal] = useState(29.4);
  const [pedido, setPedido] = useState(null);
  const [infoRes, setInfoRes] = useState(null);
  const [perfil, setPerfil] = useState(null);

  const navigation = useNavigation();

  const savePedidos = (name, value, opcao1, opcao2, id_restaurant) => {
    setPedido(name, value, opcao1, opcao2, id_restaurant);
  };

  const { quantidade } = route.params;

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
  }, []);
  // console.log(perfil);

  useEffect(() => {
    if (pedido != null) {
      api.sendCodeRes(pedido.id_restaurant).then((res) => {
        if (res) {
          setInfoRes(res.data);
        } else {
          return;
        }
      });
      setSubTotal(pedido.value);
    }
  }, [pedido]);
  // continuar essa logica e terminar essa pagina e depois concluir as proximas paginas
  // console.log(pedido, quantidade, infoRes);

  if (infoRes) {
    return (
      <ScrollView>
        <Container>
          <StatusBar
            barStyle={"dark-content"}
            translucent={true}
            backgroundColor={"transparent"}
          />
          <ButtonInvite onPress={() => navigation.navigate("InviteFriends")}>
            <TextInvite>Convidar amigos</TextInvite>
          </ButtonInvite>
          {/* alterar o nome para quando tiver o perfil */}
          <Title>Cliente {perfil.perfil.nome}</Title>
          <InfoCard>
            <InfoText>
              Restaurante:{" "}
              <InfoTextHighlighted>
                {infoRes.nome_restaurante}
              </InfoTextHighlighted>
            </InfoText>
            <InfoText>
              Reserva nº: <InfoTextHighlighted>N/A</InfoTextHighlighted>
            </InfoText>
            <InfoText>
              {/* alterar o número da mesa quando fizer a parte de pedir o número da mesa */}
              Mesa: <InfoTextHighlighted>28</InfoTextHighlighted>
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
                    source={require("../../../assets/images/perfilImg1.png")}
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
                  text={`${pedido.opcao1}, ${pedido.opcao2}`}
                  value={`${pedido.value}€`}
                />
              </CardOrder>
            </View>
          ) : (
            <View>
              <View>
                <PerfilCard>
                  <PerfilImg
                    source={require("../../../assets/images/perfilImg1.png")}
                  />
                  <PerfilName>Susie Bridges</PerfilName>
                </PerfilCard>
                <CardOrder>
                  {/* perguntar se esse number do card e o número da quantidade de pratos desse pedido */}
                  {/* um exemplo a quantidade de peixes andala que essa mesma pessoa pediu */}
                  <OrderCheckout
                    number={1}
                    title={pedido.name}
                    text={`${pedido.opcao1}, ${pedido.opcao2}`}
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
            <TextButton>Adicionar mais itens</TextButton>
            <IconBackRight />
          </BoxButton>
          <BoxButton onPress={() => navigation.navigate("ExchangeOrders")}>
            <TextButton>Trocar pedidos</TextButton>
            <IconBackRight />
          </BoxButton>

          <ViewMargin></ViewMargin>

          <MainButton
            text={"checkout"}
            onPress={() => navigation.navigate("SplitAccount")}
          />
        </Container>
      </ScrollView>
    );
  }
};
