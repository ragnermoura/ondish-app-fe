import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { CardBanner, CardButton, Container } from "./styles";
import { ScrollView } from "react-native";
import ToReceiveButton from "../../components/buttons/toReceiveButton";
import SearchInput from "../../components/input/searchInput";
import Banner from "../../components/cards/bannerSearch/bannerSearchComp";

export default () => {
  const [clicked, setClicked] = useState(true);
  const [search, setSearch] = useState("");

  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <CardButton>
          <ToReceiveButton
            text={"Receber em casa"}
            clicked={clicked}
            onPress={() => setClicked(true)}
          />
          <ToReceiveButton
            text={"Reservar restaurante"}
            clicked={!clicked}
            onPress={() => setClicked(false)}
          />
        </CardButton>

        <SearchInput
          placeholder={"pesquisar"}
          value={search}
          onChangeText={(s) => setSearch(s)}
        />
        <CardBanner>
          <Banner title={"Nethai Kitchen"} subtitle={"Chinese . American"} />
          <Banner title={"Lazy Bear"} subtitle={"Chinese . American"} />
          <Banner title={"Lazy Bear"} subtitle={"Chinese . American"} />
          <Banner title={"Lazy Bear"} subtitle={"Chinese . American"} />
        </CardBanner>
      </Container>
    </ScrollView>
  );
};
