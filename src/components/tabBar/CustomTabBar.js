import React from "react";
import styled from "styled-components/native";

import Home from "../../../assets/icons/home.svg";
import HomeRed from "../../../assets/icons/homeRed.svg";
import Pesquisar from ".../../../assets/icons/search.svg";
import Carrinho from ".../../../assets/icons/orders.svg";
import Peril from ".../../../assets/icons/profile.svg";
import config from "../../../assets/config.json";

const TabArea = styled.View`
  height: 60px;
  background-color: #fff;
  flex-direction: row;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextItem = styled.Text`
  font-size: 10px;
  justify-content: center;
  text-align: center;
`;

// quando clicar no botao pagar que aparecer o popUpConfirmation na tela colocar esse popup na bar e
// tirar apos clicar em voltar pra mesa
const PopUp = styled.View`
  position: absolute;
  z-index: 10;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      {/* <PopUp /> */}
      <TabItem onPress={() => goTo("Home")}>
        {state.index === 0 ? (
          <HomeRed
            // style={{ opacity: state.index === 0 ? 1 : 0.5 }}
            width="30"
            height="30"
          />
        ) : (
          <Home
            // style={{ opacity: state.index === 0 ? 1 : 0.5 }}
            width="30"
            height="30"
          />
        )}

        <TextItem style={{ color: state.index === 0 ? "#ed2024" : "#868686" }}>
          Home
        </TextItem>
      </TabItem>

      <TabItem onPress={() => goTo("Pesquisar")}>
        <Pesquisar
          // style={{ opacity: state.index === 1 ? 1 : 1.5 }}
          width="30"
          height="30"
        />
        <TextItem style={{ color: state.index === 1 ? "#ed2024" : "#868686" }}>
          Pesquisar
        </TextItem>
      </TabItem>

      <TabItem onPress={() => goTo("Carrinho")}>
        <Carrinho
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            // opacity: state.index === 3 ? 1 : 9,
          }}
          width="30"
          height="30"
        />
        <TextItem style={{ color: state.index === 3 ? "#ed2024" : "#868686" }}>
          Carrinho{" "}
        </TextItem>
      </TabItem>

      <TabItem onPress={() => goTo("Perfil")}>
        <Peril
          // style={{ opacity: state.index === 4 ? 1 : 1.5 }}
          width="30"
          height="30"
        />
        <TextItem style={{ color: state.index === 2 ? "#ed2024" : "#868686" }}>
          Perfil
        </TextItem>
      </TabItem>
    </TabArea>
  );
};
