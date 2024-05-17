import React, { useState } from "react";
import { Text, View } from "react-native";
import { Container, InputArea, InputPassword } from "./styles";
import Btn from "../../components/buttons/mainButton";
import SigInput from "../../components/input/mainInput";

export default () => {
  const [passwordField, setPasswordField] = useState("");
  const [confirmPasswordField, setConfirmPasswordField] = useState("");

  return (
    <Container>
      <View style={{ marginBottom: 40 }}></View>
      <InputArea>
        <InputPassword>
          <SigInput
            placeholder="Nova senha"
            value={passwordField}
            onChangeText={(t) => setPasswordField(t)}
            isPassword={true}
          />
        </InputPassword>
        <View style={{ marginBottom: 5 }}></View>
        <InputPassword>
          <SigInput
            placeholder="Confirmar a senha"
            value={confirmPasswordField}
            onChangeText={(t) => setConfirmPasswordField(t)}
            isPassword={true}
          />
        </InputPassword>
      </InputArea>
      <View style={{ marginBottom: "120%" }}></View>
      <Btn text={"Alterar a senha"} />
    </Container>
  );
};
