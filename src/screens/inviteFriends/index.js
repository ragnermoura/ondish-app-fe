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
  InputEvent,
  TitleEvent,
  ViewEvent,
  ViewMesa,
} from "./styles";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  Dimensions,
  Platform,
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MainButton from "../../components/buttons/mainButton";
import SearchInput from "../../components/input/searchInput";
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/auth/index";
import { baseUrl } from "../../../services/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconUser from "../../../assets/icons/profile.svg";
import debounce from "lodash.debounce";
import Carousel from "react-native-snap-carousel";

const { height, width: viewportWidth } = Dimensions.get("window");

const handleInputChange = debounce(
  (input, convidados, setPessoas, anfitriao) => {
    if (input === "") {
      setPessoas([]);
      return;
    } else {
      api.getUsers().then((res) => {
        const filteredUsers = res.data.response.filter((user) =>
          user.nome.toLowerCase().startsWith(input.toLowerCase())
        );

        const newPessoas = [];

        filteredUsers.forEach((user) => {
          const isUserAlreadyInConvidados = convidados.some(
            (e) => e.id_user === user.id_user
          );

          if (!isUserAlreadyInConvidados) {
            if (user.id_user === anfitriao.perfil.id_user) {
              return;
            } else {
              newPessoas.push(user);
            }
          }
        });

        if (newPessoas.length > 0) {
          setPessoas(newPessoas);
        }
      });
    }
  },
  300
);

export default ({ route }) => {
  const [input, setInput] = useState("");
  const [convidados, setConvidados] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [anfitriao, setAnfitriao] = useState(null);
  const [eventName, setEventName] = useState("");
  const [table, setTable] = useState(null);
  const [tables, setTables] = useState(null);

  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const { value, prato, id_restaurant, isBebida } = route.params;
  // const value = 30.0;
  // const prato = 1;
  // const id_restaurant = 1;
  // const isBebida = true;

  //colocar o filtro para pegar so pessoas de nivel 3 e nao puxar o dono da conta tmb

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

  const handleAddConvidado = (convidado) => {
    if (!convidados.some((c) => c.nome === convidado.nome)) {
      setConvidados([...convidados, convidado]);
      setPessoas([]);
      setInput("");
    } else {
      setInput("");
    }
  };

  const handleInvite = async () => {
    if (convidados.length == 0) {
      alert("Você precisa convidar pelo menos 1 pessoa!");
    } else {
      if (eventName == "") {
        Alert.alert("Ops...", "Você não informou o nome da sala!");
      } else {
        api
          .sendConvidado(convidados, 4, eventName, id_restaurant)
          .then((res) => {
            if (res) {
              console.log(res.data);
              if (res.status == 201) {
                navigation.navigate("WatingFriends", {
                  anfi: true,
                  quantidade: convidados.length + 1,
                  prato: prato,
                  value: value,
                  id_restaurant: id_restaurant,
                  isBebida: isBebida,
                  sala: eventName,
                  convidados: convidados,
                  salaInfo: res.data,
                  table: table,
                });
              }
            } else {
              alert("Erro ao convidar");
            }
          });
      }
      // api.sendConvidado(convidados, anfitriao.id_user, eventName);
      // navigation.navigate("AddOrder", {
      //   quantidade: convidados.length + 1,
      //   prato: prato,
      //   value: value,
      //   id_restaurant: id_restaurant,
      //   isBebida: isBebida,
      // });
      // navigation.navigate("WatingFriends", {
      //   // anfi: true,
      //   quantidade: convidados.length + 1,
      //   prato: prato,
      //   value: value,
      //   id_restaurant: id_restaurant,
      //   isBebida: isBebida,
      // });
    }
  };

  useEffect(() => {
    api.getTable(id_restaurant).then((res) => {
      // setTable([...table, res.data]);
      setTables(res.data);
    });
  }, []);

  const handleChange = (event) => {
    setInput(event);
    handleInputChange(event, convidados, setPessoas, anfitriao);
  };

  const data = [
    {
      data: 1,
      image: require("../../../assets/images/evento.png"),
    },
    {
      data: 2,
      image: require("../../../assets/images/mesa.png"),
    },
    {
      data: 3,
      image: require("../../../assets/images/convite.png"),
    },
  ];

  const renderItem = ({ item }) => {
    if (item.data == 1) {
      return (
        <BoxInfo>
          <ImgGift source={item.image} style={{ width: 200, height: 200 }} />
          <Title>Qual o motivo de reunir os amigos?</Title>
          <ViewEvent>
            <InputEvent
              placeholder="Titulo do evento"
              onChangeText={(t) => setEventName(t)}
              value={eventName}
            />
          </ViewEvent>
        </BoxInfo>
      );
    } else if (item.data == 2) {
      return (
        <BoxInfo>
          <ImgGift source={item.image} style={{ width: 200, height: 200 }} />
          <ViewMesa>
            <TitleEvent>Mesa</TitleEvent>
            <InputEvent
              inputMode="numeric"
              placeholder="Selecione a mesa"
              onChangeText={(t) => setTable(t)}
              value={table}
            />
          </ViewMesa>
        </BoxInfo>
      );
    } else if (item.data == 3) {
      return (
        <BoxInfo>
          <ImgGift source={item.image} style={{ width: 200, height: 200 }} />
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
              onChangeText={(t) => handleChange(t)}
            />
          </InputArea>
          {pessoas.length != 0 ? (
            pessoas.map((e, index) => {
              // console.log(pessoas);
              // if (input == e.nome) {
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
              // } else {
              //   return <View key={index}></View>;
              // }
            })
          ) : (
            <></>
          )}
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
                      setPessoas([]);
                      setInput("");
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
            <MainButton
              text={"Convidar Amigos"}
              onPress={() => handleInvite()}
            />
            <ButtonArea
              onPress={() => {
                if (convidados.length > 0) {
                  alert("Você selecionou alguém para convidar");
                } else {
                  if (table == null) {
                    Alert.alert("Ops...", "Você não selecionou a mesa!");
                  } else {
                    console.log(prato);
                    navigation.navigate("AddOrder", {
                      quantidade: 1,
                      prato: prato,
                      value: value,
                      id_restaurant: id_restaurant,
                      isBebida: isBebida,
                      table: table,
                    });
                  }
                }
              }}
            >
              <TextButton>Somente eu</TextButton>
            </ButtonArea>
          </BoxButton>
        </BoxInfo>
      );
    }
  };

  const handleSnapToItem = (index) => {
    setActiveSlide(index);
    setActiveDotIndex(index);
  };

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeDotIndex ? "#d9d9d9" : "#d9d9d9",
                paddingRight: index === activeDotIndex ? 20 : 0,
              },
            ]}
            onPress={() => {
              carouselRef.current.snapToItem(index);
              setActiveDotIndex(index);
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView>
      <Container style={{ minHeight: height - 155 }}>
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={renderItem}
          width={viewportWidth * 0.8}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth * 0.8}
          onSnapToItem={handleSnapToItem}
        />

        <View style={styles.paginationContainer}>{renderPagination()}</View>
        {/* <BoxInfo>
          <ImgGift source={require("../../../assets/images/gift.png")} />
          <Title>Convidar amigos para sua sala</Title>
          {/* <ViewEvent>
            <TitleEvent>Titulo do evento</TitleEvent>
            <InputEvent
              placeholder="Aniversário do Antônio"
              onChangeText={(t) => setEventName(t)}
              value={eventName}
            />
          </ViewEvent> */}
        {/* <ViewMesa>
            <TitleEvent>Mesa</TitleEvent>
            <InputEvent
              inputMode="numeric"
              placeholder="Selecione a mesa"
              onChangeText={(t) => setTable(t)}
              value={table}
            />
          </ViewMesa> */}
        {/* <InputArea> */}
        {/* <IconArrow fill="#444" />
            <Input
              placeholder="https://ui8.net/76738b"
              placeholderTextColor={"#010f07"}
            /> */}
        {/* <SearchInput
              placeholder={"Digite o nome do convidado"}
              value={input}
              onChangeText={(t) => handleChange(t)}
            />
          </InputArea>
          {pessoas.length != 0 ? (
            pessoas.map((e, index) => {
              // console.log(pessoas);
              // if (input == e.nome) {
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
              // } else {
              //   return <View key={index}></View>;
              // }
            })
          ) : (
            <></>
          )}
        </BoxInfo> */}
        {/* <InvitedPersonCard>
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
                    setPessoas([]);
                    setInput("");
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
                if (table == null) {
                  Alert.alert("Ops...", "Você não selecionou a mesa!");
                } else {
                  console.log(prato);
                  navigation.navigate("AddOrder", {
                    quantidade: 1,
                    prato: prato,
                    value: value,
                    id_restaurant: id_restaurant,
                    isBebida: isBebida,
                    table: table,
                  });
                }
              }
            }}
          >
            <TextButton>Somente eu</TextButton>
          </ButtonArea>
        </BoxButton> */}
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});
