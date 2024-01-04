import React from "react";
import { Container, Title, Subtext } from "./styles";

export default () => {
  return (
  <Container>

    <Title>Ondish</Title>
    <Subtext>
      Digite seu número de telefone ou e-mail para entrar ou
    </Subtext>

    {/* <LoginArea>
      <InputArea>
        <SigInput
          IconSvg={EmailIcon}
          placeholder="Escreva o seu e-mail"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />
      </InputArea>

      <InputPassword>
        <SigInput
          IconSvg={LockIcon}
          placeholder="Sua senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          isPassword={true}
        />
      </InputPassword>    
    </LoginArea> */}

  </Container>
  );
};
