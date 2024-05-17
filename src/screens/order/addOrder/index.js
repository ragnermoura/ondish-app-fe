import React, { useState } from "react";
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

export default ({ route }) => {
  const { name, value } = route.params;

  const [addInstructions, setAddInstructions] = useState("");
  const [quantityOrder, setQuantityOrder] = useState(1);
  const [orderValue, setOrderValue] = useState(value);

  // const name = "Cookie Sandwich";
  // const [orderValue, setOrderValue] = useState("11.99");

  const navigation = useNavigation();

  const addQuantityOrder = () => {
    setQuantityOrder(quantityOrder + 1);
  };

  const removeQuantityOrder = () => {
    if (quantityOrder == 1) {
      alert("Você precisa pedir pelo menos 1!");
    } else {
      setQuantityOrder(quantityOrder - 1);
    }
  };

  return (
    <ScrollView>
      <Container>
        <StatusBar
          barStyle={"light-content"}
          translucent={true}
          backgroundColor={"transparent"}
        />
        <ImgBackground
          source={require("../../../../assets/images/headerOrderImg.png")}
        >
          <Header>
            <ButtonBack onPress={() => navigation.goBack()}>
              <IconClose />
            </ButtonBack>
          </Header>
        </ImgBackground>
        <InfoFood>
          <Title>{name}</Title>
          <Description>
            Biscoito amanteigado, bolachas de tartaruga de chocolate e veludo
            vermelho
          </Description>
          <SubTitle>
            Chinese{" "}
            <Image source={require("../../../../assets/icons/iconPoint.png")} />{" "}
            American{" "}
            <Image source={require("../../../../assets/icons/iconPoint.png")} />{" "}
            Deshi food
          </SubTitle>
        </InfoFood>
        <OptionsCard>
          <HeaderCard>
            <TitleOptions>Escolha do melhor Biscoito</TitleOptions>
            <RequiredCard>
              <RequiredText>REQUIRED</RequiredText>
            </RequiredCard>
          </HeaderCard>
          <View>
            <OrderOptions name={"Chocolate Chip"} />
            <OrderOptions name={"Cookies and Cream"} />
            <OrderOptions name={"Funfetti"} />
            <OrderOptions name={"M and M"} />
            <OrderOptions name={"Red Velvet"} />
            <OrderOptions name={"Peanut Butter"} />
            <OrderOptions name={"Snickerdoodle"} />
            <OrderOptions name={"White Chocolate Macadamia"} />
          </View>
        </OptionsCard>
        <OptionsCard>
          <HeaderCard>
            <TitleOptions>Escolha do Biscoito de baixo</TitleOptions>
            <RequiredCard>
              <RequiredText>REQUIRED</RequiredText>
            </RequiredCard>
          </HeaderCard>
          <View>
            <OrderOptions name={"Chocolate Chip"} />
            <OrderOptions name={"Cookies and Cream"} />
            <OrderOptions name={"Funfetti"} />
            <OrderOptions name={"M and M"} />
            <OrderOptions name={"Red Velvet"} />
            <OrderOptions name={"Peanut Butter"} />
            <OrderOptions name={"Snickerdoodle"} />
            <OrderOptions name={"White Chocolate Macadamia"} />
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
            text={`Adicionar ao Pedido (€${orderValue.replace(",", ".")})`}
            onPress={() => navigation.navigate("IndividualCheckout")}
          />
        </BoxButtonAdd>
      </Container>
    </ScrollView>
  );
};
