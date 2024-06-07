import React, { useEffect, useRef, useState } from "react";
import {
  ButtonArea,
  Container,
  TextButton,
  ImgGift,
  Title,
  BoxButton,
  BoxInfo,
  InputArea,
  // Input,
  IconArrow,
  InviteFriendCard,
  ImgFriend,
  TextFriend,
  InvitedPersonCard,
  InvitedPersonText,
  IconCard,
} from "./styles";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  Dimensions,
  Platform,
} from "react-native";
import MainButton from "../../components/buttons/mainButton";
import SearchInput from "../../components/input/searchInput";
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/auth/index";
import { baseUrl } from "../../../services/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconUser from "../../../assets/icons/profile.svg";

const { height } = Dimensions.get("window");

export default ({ route }) => {
  const [input, setInput] = useState("");
  const [convidados, setConvidados] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [anfitriao, setAnfitriao] = useState(null);

  const { value, prato, id_restaurant } = route.params;

  const getObject = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error("Error retrieving object", error);
    }
    return null;
  };
  getObject("perfil").then((perfil) => setAnfitriao(perfil));

  const navigation = useNavigation();

  const toggleInput = (t) => {
    setInput(t);
  };

  // fazer um get do usuario para saber que e o dono do app
  // fazer a condição do avatar

  const handleAddConvidado = (convidado) => {
    if (!convidados.some((c) => c.nome === convidado.nome)) {
      setConvidados([...convidados, convidado]);
      setPessoas([]);
    }
  };

  const handleInvite = async () => {
    if (convidados.length == 0) {
      alert("Você precisa convidar pelo menos 1 pessoa!");
    } else {
      // api.sendConvidado(convidados, anfitriao.id_user);
      // navigation.navigate("AddOrder", {
      //   quantidade: convidados.length + 1,
      //   prato: prato,
      //   value: value,
      //   id_restaurant: id_restaurant,
      // });
      navigation.navigate("WatingFriends", {
        // anfi: true,
        quantidade: convidados.length + 1,
        prato: prato,
        value: value,
        id_restaurant: id_restaurant,
      });
    }
  };

  useEffect(() => {
    api.getPerfil().then((res) => {
      res.data.response.map((e) => {
        // console.log(e);
        if (e.nome == input) {
          if (!pessoas.some((p) => p.nome === e.nome)) {
            // console.log(e, "user selecionado");
            setPessoas([...convidados, e]);
          }
        } else {
          return;
        }
      });
    });
  }, [input]);

  return (
    <ScrollView>
      <Container style={{ minHeight: height - 155 }}>
        <BoxInfo>
          <ImgGift source={require("../../../assets/images/gift.png")} />
          <Title>Convidar amigos para sua sala</Title>
          <InputArea>
            {/* <IconArrow fill="#444" />
            <Input
              placeholder="https://ui8.net/76738b"
              placeholderTextColor={"#010f07"}
            /> */}
            <SearchInput
              placeholder={"Digite o nome do convidado"}
              value={input}
              onChangeText={(t) => toggleInput(t)}
            />
          </InputArea>
          {pessoas.length != 0 ? (
            pessoas.map((e, index) => {
              // console.log(pessoas);
              if (input == e.nome) {
                return (
                  <InviteFriendCard
                    key={index}
                    style={{ flexDirection: "row" }}
                    onPress={() => handleAddConvidado(e)}
                  >
                    {e.avatar == "/avatar/default-avatar.png" ? (
                      <IconCard>
                        <IconUser />
                      </IconCard>
                    ) : (
                      <ImgFriend
                        source={{ uri: `${baseUrl}/public/${e.avatar}` }}
                      />
                    )}

                    <TextFriend>
                      {e.nome} {e.sobrenome}
                    </TextFriend>
                  </InviteFriendCard>
                );
              } else {
                return <View key={index}></View>;
              }
            })
          ) : (
            <></>
          )}
        </BoxInfo>
        <InvitedPersonCard>
          <InvitedPersonText>Pessoas Convidadas</InvitedPersonText>
          {convidados.length != 0 ? (
            convidados.map((c, index) => {
              return (
                <InviteFriendCard
                  key={index}
                  style={{ flexDirection: "row" }}
                  onPress={() => {
                    const updatedStatesArray = convidados.filter(
                      (state) => state.nome !== c.nome
                    );
                    // Atualiza o estado com o novo array sem o estado excluído
                    setConvidados(updatedStatesArray);
                  }}
                >
                  {c.avatar == "/avatar/default-avatar.png" ? (
                    <IconCard>
                      <IconUser />
                    </IconCard>
                  ) : (
                    <ImgFriend
                      source={{ uri: `${baseUrl}/public/${c.avatar}` }}
                    />
                  )}
                  <TextFriend>
                    {c.nome} {c.sobrenome}
                  </TextFriend>
                </InviteFriendCard>
              );
            })
          ) : (
            <></>
          )}
        </InvitedPersonCard>
        <BoxButton>
          <MainButton text={"Convidar Amigos"} onPress={() => handleInvite()} />
          <ButtonArea
            onPress={() => {
              if (convidados.length > 0) {
                alert("Você selecionou alguém para convidar");
              } else {
                navigation.navigate("AddOrder", {
                  quantidade: 1,
                  prato: prato,
                  value: value,
                  id_restaurant: id_restaurant,
                });
              }
            }}
          >
            <TextButton>Somente eu</TextButton>
          </ButtonArea>
        </BoxButton>
      </Container>
    </ScrollView>
  );
};
