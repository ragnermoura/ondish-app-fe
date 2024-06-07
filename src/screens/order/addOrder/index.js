import React, { useEffect, useState } from "react";
import {
  Container,
  ImgBackground,
  Header,
  ButtonBack,
  SubTitle,
  InfoFood,
  Title,
  Description,
  OptionsCard,
  HeaderCard,
  TitleOptions,
  RequiredCard,
  RequiredText,
  AreaInput,
  Input,
  IconBack,
  BoxButtonQ,
  ButtonArea,
  TextQ,
  BoxButtonAdd,
  Options,
  CheckCard,
  Check,
  Name,
} from "./styles";
import IconClose from "../../../../assets/icons/iconClose.svg";
import {
  Image,
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OrderOptions from "../../../components/orderOptions/orderOptions";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconPlus from "../../../../assets/icons/plus.svg";
import IconMinus from "../../../../assets/icons/minus.svg";
import MainButton from "../../../components/buttons/mainButton";
import { baseUrl } from "../../../../services/config";
import api from "../../../../services/auth/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ route }) => {
  const { prato, value, id_restaurant, quantidade } = route.params;

  const [addInstructions, setAddInstructions] = useState("");
  const [quantityOrder, setQuantityOrder] = useState(1);
  const [initialValue, setInitialValue] = useState(value);
  const [orderValue, setOrderValue] = useState(value);
  const [checked, setChecked] = useState(false);
  const [nameOption, setNameOption] = useState("");
  const [checked2, setChecked2] = useState(false);
  const [nameOption2, setNameOption2] = useState("");
  const [plate, setPlate] = useState(null);
  const [bebida, setBebida] = useState(null);

  useEffect(() => {
    api.getPlates(prato).then((res) => {
      if (res) {
        setPlate(res.data);
      } else {
        alert("Erro", "Erro ao buscar prato");
      }
    });
    api.getBebida(id_restaurant).then((res) => {
      if (res) {
        setBebida(res.data);
      } else {
        alert("Erro", "Erro ao buscar bebida");
      }
    });
  }, []);

  const handleCheckout = () => {
    const storeObject = async (key, value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (error) {
        console.error("Error storing object", error);
      }
    };
    // console.log(plate.titulo, orderValue, nameOption, nameOption2);
    storeObject("prato", {
      name: plate.titulo,
      value: orderValue,
      opcao1: nameOption,
      opcao2: nameOption2,
      id_restaurant: id_restaurant,
    });

    if (nameOption == "" && nameOption2 == "") {
      alert("Selecione as opções do pedido!");
    } else {
      navigation.navigate("IndividualCheckout", {
        quantidade: quantidade,
      });
    }
  };

  // console.log(plate);
  // console.log(bebida);

  const selectOption = (e) => {
    if (nameOption == "" && checked == false) {
      setChecked(true);
      setNameOption(e.titulo);
    } else if (e.titulo != nameOption && checked == true) {
      alert("Outra opção ja foi selecionada!");
    } else if (e.titulo == nameOption && checked == true) {
      setChecked(false);
      setNameOption("");
    }
  };

  const selectOption2 = (e) => {
    if (nameOption2 == "" && checked2 == false) {
      setChecked2(true);
      setNameOption2(e.titulo);
    } else if (e.titulo != nameOption2 && checked2 == true) {
      alert("Outra opção ja foi selecionada!");
    } else if (e.titulo == nameOption2 && checked2 == true) {
      setChecked2(false);
      setNameOption2("");
    }
  };

  const navigation = useNavigation();

  const addQuantityOrder = () => {
    setQuantityOrder(quantityOrder + 1);
    setOrderValue((initialValue * (quantityOrder + 1)).toFixed(2));
  };

  const removeQuantityOrder = () => {
    if (quantityOrder == 1) {
      alert("Você precisa pedir pelo menos 1!");
    } else {
      setQuantityOrder(quantityOrder - 1);
      setOrderValue((initialValue * (quantityOrder - 1)).toFixed(2));
    }
  };

  if (plate) {
    return (
      <ScrollView>
        <Container>
          <StatusBar
            barStyle={"light-content"}
            translucent={true}
            backgroundColor={"transparent"}
          />
          <ImgBackground
            source={{ uri: `${baseUrl}/public${plate.fotos[0].foto}` }}
          >
            <Header>
              <ButtonBack onPress={() => navigation.goBack()}>
                <IconClose />
              </ButtonBack>
            </Header>
          </ImgBackground>
          <InfoFood>
            <Title>{plate.titulo}</Title>
            <Description>{plate.descricao}</Description>
            {/* <SubTitle>
              Chinese{" "}
              <Image
                source={require("../../../../assets/icons/iconPoint.png")}
              />{" "}
              American{" "}
              <Image
                source={require("../../../../assets/icons/iconPoint.png")}
              />{" "}
              Deshi food
            </SubTitle> */}
            <SubTitle>Nome dos convidados</SubTitle>
          </InfoFood>
          <OptionsCard>
            <HeaderCard>
              <TitleOptions>Escolha a melhor opção para o prato</TitleOptions>
              <RequiredCard>
                <RequiredText>REQUIRED</RequiredText>
              </RequiredCard>
            </HeaderCard>
            <View>
              {plate.opcoes.map((e, index) => {
                return (
                  <Options key={index}>
                    <CheckCard
                      onPress={() => selectOption(e)}
                      style={{
                        borderColor:
                          checked && nameOption == e.titulo
                            ? "rgba(255, 0, 0, 0.5)"
                            : "rgba(134, 134, 134, 0.8)",
                      }}
                    >
                      <Check
                        style={{
                          backgroundColor:
                            checked && nameOption == e.titulo
                              ? "#ed2024"
                              : "#fff",
                        }}
                      ></Check>
                    </CheckCard>
                    <Name>{e.titulo}</Name>
                  </Options>
                );
              })}
            </View>
          </OptionsCard>
          <OptionsCard>
            <HeaderCard>
              <TitleOptions>Escolha a Bebida</TitleOptions>
              <RequiredCard>
                <RequiredText>REQUIRED</RequiredText>
              </RequiredCard>
            </HeaderCard>
            <View>
              {plate.opcoes.map((e, index) => {
                return (
                  <Options key={index}>
                    <CheckCard
                      onPress={() => selectOption2(e)}
                      style={{
                        borderColor:
                          checked2 && nameOption2 == e.titulo
                            ? "rgba(255, 0, 0, 0.5)"
                            : "rgba(134, 134, 134, 0.8)",
                      }}
                    >
                      <Check
                        style={{
                          backgroundColor:
                            checked2 && nameOption2 == e.titulo
                              ? "#ed2024"
                              : "#fff",
                        }}
                      ></Check>
                    </CheckCard>
                    <Name>{e.titulo}</Name>
                  </Options>
                );
              })}
              {/* {bebida.opcoes.map((e, index) => {
                return (
                  <Options key={index}>
                    <CheckCard
                      onPress={() => selectOption2(e)}
                      style={{
                        borderColor:
                          checked2 && nameOption2 == e
                            ? "rgba(255, 0, 0, 0.5)"
                            : "rgba(134, 134, 134, 0.8)",
                      }}
                    >
                      <Check
                        style={{
                          backgroundColor:
                            checked2 && nameOption2 == e ? "#ed2024" : "#fff",
                        }}
                      ></Check>
                    </CheckCard>
                    <Name>{e.titulo}</Name>
                  </Options>
                );
              })} */}
            </View>
          </OptionsCard>
          <AreaInput>
            <Input
              placeholder="Adicionar Instruções Especiais"
              placeholderTextColor={"#010f07"}
              onChangeText={(t) => setAddInstructions(t)}
              value={addInstructions}
            />
            <IconBack />
          </AreaInput>
          <BoxButtonQ>
            <ButtonArea onPress={() => removeQuantityOrder()}>
              <IconMinus />
            </ButtonArea>
            <TextQ>
              {quantityOrder < 10 ? 0 : null}
              {quantityOrder}
            </TextQ>
            <ButtonArea onPress={() => addQuantityOrder()}>
              <IconPlus />
            </ButtonArea>
          </BoxButtonQ>
          <BoxButtonAdd>
            <MainButton
              text={`Adicionar ao Pedido (€${orderValue})`}
              onPress={() => handleCheckout()}
            />
          </BoxButtonAdd>
        </Container>
      </ScrollView>
    );
  } else {
    return <Container></Container>;
  }
};
