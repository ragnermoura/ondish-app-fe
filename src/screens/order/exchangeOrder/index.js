import React from "react";
import {
  Container,
  Title,
  RedCircle,
  UserCard,
  ImgUser,
  TextUser,
} from "./styles";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <RedCircle
        source={require("../../../../assets/images/RedCircleBack.png")}
      />
      <Title>Qual pessoa você deseja que o pedido seja trocado?</Title>
      <UserCard
        onPress={() =>
          navigation.navigate("SelectedPerson", { name: "Susie Bridges" })
        }
      >
        <ImgUser
          source={require("../../../../assets/images/BigPerfilImg1.png")}
        />
        <TextUser>Susie Bridges</TextUser>
      </UserCard>
      <UserCard
        onPress={() =>
          navigation.navigate("SelectedPerson", { name: "Rodney Miller" })
        }
      >
        <ImgUser
          source={require("../../../../assets/images/BigPerfilImg2.png")}
        />
        <TextUser>Rodney Miller</TextUser>
      </UserCard>
      <UserCard
        onPress={() =>
          navigation.navigate("SelectedPerson", { name: "Susie Bridges" })
        }
      >
        <ImgUser
          source={require("../../../../assets/images/BigPerfilImg1.png")}
        />
        <TextUser>Susie Bridges</TextUser>
      </UserCard>
      <UserCard
        onPress={() =>
          navigation.navigate("SelectedPerson", { name: "Rodney Miller" })
        }
      >
        <ImgUser
          source={require("../../../../assets/images/BigPerfilImg2.png")}
        />
        <TextUser>Rodney Miller</TextUser>
      </UserCard>
    </Container>
  );
};
