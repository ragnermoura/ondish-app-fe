import React, { useEffect, useState, useRef } from "react";
import {
  ButtonArea,
  Container,
  IconCard,
  ImgFriend,
  InvitedPersonCard,
  InvitedPersonText,
  InviteFriendCard,
  TextButton,
  TextFriend,
} from "./styles";
import MainButton from "../../components/buttons/mainButton";
import { useNavigation } from "@react-navigation/native";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import IconUser from "../../../assets/icons/profile.svg";
import { baseUrl } from "../../../services/config";
import api from "../../../services/auth/index";

export default ({ route }) => {
  const {
    anfi,
    prato,
    value,
    id_restaurant,
    quantidade,
    sala,
    convidados,
    salaInfo,
    isBebida,
    table,
  } = route.params;
  const [anfitriao, setAnfitriao] = useState(anfi);
  const [convidadosState, setConvidadosState] = useState(convidados);
  const intervalIdRef = useRef(null);
  const [allAccepted, setAllAccepted] = useState(false);

  const navigation = useNavigation();

  const handleContinuar = () => {
    if (allAccepted) {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      navigation.navigate("AddOrder", {
        quantidade: quantidade,
        prato: prato,
        value: value,
        id_restaurant: id_restaurant,
        isBebida: isBebida,
        table: table,
        sala: salaInfo.sala.id_sala,
      });
    }
  };

  const handleCancel = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    console.log(salaInfo.sala);
    api.cancelSala(salaInfo.sala.id_sala).then((res) => {
      console.log(res);
      Alert.alert("Boa!", "Sala cancelada!");
      navigation.reset({
        routes: [
          {
            name: "MainTab",
            state: {
              routes: [
                {
                  name: "OrderInTheRestaurant",
                  params: {
                    id: id_restaurant,
                  },
                },
              ],
            },
          },
        ],
      });
    });
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      api
        .verificaConvidado(salaInfo.sala.id_sala)
        .then((response) => {
          const updatedConvidados = response.data.convidados.map(
            (convidado) => {
              const updatedConvidado = convidadosState.find(
                (c) => c.id_user === convidado.id_user
              );
              return {
                ...updatedConvidado,
                status: convidado.tb_sala_convidado.status,
              };
            }
          );
          setConvidadosState(updatedConvidados);

          console.log(convidadosState.every((c) => c.status === "Aceito"));
          if (convidadosState.every((c) => c.status === "Aceito")) {
            setAllAccepted(true);
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar dados da API", error);
        });
    }, 1000); // Intervalo de 1 segundo

    return () => clearInterval(intervalIdRef.current);
  }, [convidadosState]);

  return (
    <Container>
      <Image
        source={require("../../../assets/images/aguarde.png")}
        style={{ width: 150, height: 150, marginTop: -60, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#2b2b2b" }}>
        {sala}
      </Text>
      <InvitedPersonCard>
        <InvitedPersonText>Pessoas Convidadas</InvitedPersonText>
        {convidadosState.length > 0 ? (
          convidadosState.map((c, index) => (
            <InviteFriendCard key={index} style={{ flexDirection: "row" }}>
              {c.status === "Aceito" && (
                <Image
                  source={require("../../../assets/gifs/animationCheck.gif")}
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: -20,
                    marginRight: 20,
                  }}
                  resizeMode="cover"
                />
              )}
              {c.avatar === "/avatar/default-avatar.png" ? (
                <IconCard>
                  <IconUser />
                </IconCard>
              ) : (
                <ImgFriend
                  style={{ opacity: c.status === "Aceito" ? 1 : 0.5 }}
                  source={{ uri: `${baseUrl}/public/${c.avatar}` }}
                />
              )}
              <TextFriend>
                {c.nome} {c.sobrenome}
              </TextFriend>
            </InviteFriendCard>
          ))
        ) : (
          <Text>Nenhum convidado</Text>
        )}
      </InvitedPersonCard>
      <MainButton text={"Prosseguir"} onPress={handleContinuar} />
      <View style={{ marginBottom: 40 }}></View>
      <TouchableOpacity onPress={handleCancel}>
        <Text style={{ color: "#ed2024", fontSize: 14, fontWeight: "400" }}>
          Cancelar
        </Text>
      </TouchableOpacity>
    </Container>
  );
};
