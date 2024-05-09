import React from "react";
import styled from "styled-components/native";

import Home from "../../../assets/icons/home.svg";
import Pesquisar from ".../../../assets/icons/search.svg";
import Carrinho from ".../../../assets/icons/orders.svg";
import Peril from ".../../../assets/icons/profile.svg";

import config from '../../../assets/config.json'

const TabArea = styled.View`
  height: 60px;
  background-color: #FFF;
  flex-direction: row;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);
`;


const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextItem = styled.Text`
  color: ${config.colors.red};
  font-size: 10px;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Home")}>
        <Home
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
          width="24"
          height="24"
        />
        <TextItem style={{ opacity: state.index === 1 ? 1 : 0.5 }}>
          Home
        </TextItem>
      </TabItem>

      <TabItem onPress={() => goTo("Pesquisar")}>
        <Pesquisar
          style={{ opacity: state.index === 2 ? 1 : 1.5 }}
          width="24"
          height="24"
        />
        <TextItem style={{ opacity: state.index === 2 ? 1 : 1.5 }}>
          Pesquisar
        </TextItem>
      </TabItem>

      <TabItem onPress={() => goTo("Carrinho")}>
        <Carrinho
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            opacity: state.index === 0 ? 1 : 9,
          }}
          width="24"
          height="24"
        />
        <TextItem style={{ opacity: state.index === 2 ? 1 : 1.5 }}>
          Carrinho{" "}
        </TextItem>
      </TabItem>
      
      <TabItem onPress={() => goTo("Perfil")}>
        <Peril
          style={{ opacity: state.index === 4 ? 1 : 1.5 }}
          width="24"
          height="24"
        />
        <TextItem style={{ opacity: state.index === 4 ? 1 : 1.5 }}>
          Perfil
        </TextItem>
      </TabItem>

    </TabArea>
  );
};
