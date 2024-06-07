import React from "react";
import {
  Container,
  ProfileOption,
  SubTitle,
  Title,
  IconProfile,
  ProfileOptionTextCard,
  ProfileOptionTitle,
  ProfileOptionSubTitle,
  ProfileOptionCard,
  IconArrow,
  MoreCard,
  MoreCardTitle,
  IconRatingstar,
  IconLock,
  IconBlackCard,
  IconLocation,
  IconArrowBox,
  IconFAQ,
  IconLogout,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <Title>Definições da conta</Title>
        <SubTitle>
          Actualize as suas definições, como notificações, pagamentos, edição de
          perfil, etc.
        </SubTitle>
        <ProfileOption>
          <IconProfile />
          <ProfileOptionCard>
            <ProfileOptionTextCard>
              <ProfileOptionTitle>Informações do perfil</ProfileOptionTitle>
              <ProfileOptionSubTitle>
                Alterar as informações da sua conta
              </ProfileOptionSubTitle>
            </ProfileOptionTextCard>
            <IconArrow />
          </ProfileOptionCard>
        </ProfileOption>
        <ProfileOption>
          <IconLock />
          <ProfileOptionCard>
            <ProfileOptionTextCard>
              <ProfileOptionTitle>Alterar palavra-passe</ProfileOptionTitle>
              <ProfileOptionSubTitle>
                Alterar a sua palavra-passe
              </ProfileOptionSubTitle>
            </ProfileOptionTextCard>
            <IconArrow />
          </ProfileOptionCard>
        </ProfileOption>
        <ProfileOption>
          <IconBlackCard />
          <ProfileOptionCard>
            <ProfileOptionTextCard>
              <ProfileOptionTitle>Métodos de pagamento</ProfileOptionTitle>
              <ProfileOptionSubTitle>
                Adicionaros seus cartões de crédito e débito
              </ProfileOptionSubTitle>
            </ProfileOptionTextCard>
            <IconArrow />
          </ProfileOptionCard>
        </ProfileOption>
        <ProfileOption>
          <IconLocation />
          <ProfileOptionCard>
            <ProfileOptionTextCard>
              <ProfileOptionTitle>Localização</ProfileOptionTitle>
              <ProfileOptionSubTitle>
                Adicionar ou remover os locais de entrega
              </ProfileOptionSubTitle>
            </ProfileOptionTextCard>
            <IconArrow />
          </ProfileOptionCard>
        </ProfileOption>
        <ProfileOption>
          <IconArrowBox />
          <ProfileOptionCard>
            <ProfileOptionTextCard>
              <ProfileOptionTitle>Indicar a amigos</ProfileOptionTitle>
              <ProfileOptionSubTitle>
                Ganhe €5 por indicar amigos
              </ProfileOptionSubTitle>
            </ProfileOptionTextCard>
            <IconArrow />
          </ProfileOptionCard>
        </ProfileOption>
        <MoreCard>
          <MoreCardTitle>Mais</MoreCardTitle>
          <ProfileOption>
            <IconRatingstar width={25} height={25} />
            <ProfileOptionCard>
              <ProfileOptionTextCard>
                <ProfileOptionTitle>Avalie-nos</ProfileOptionTitle>
                <ProfileOptionSubTitle>
                  Avalie-nos playstore, Appstor
                </ProfileOptionSubTitle>
              </ProfileOptionTextCard>
              <IconArrow />
            </ProfileOptionCard>
          </ProfileOption>
          <ProfileOption>
            <IconFAQ />
            <ProfileOptionCard>
              <ProfileOptionTextCard>
                <ProfileOptionTitle>FAQ</ProfileOptionTitle>
                <ProfileOptionSubTitle>
                  Perguntas mais frequentes
                </ProfileOptionSubTitle>
              </ProfileOptionTextCard>
              <IconArrow />
            </ProfileOptionCard>
          </ProfileOption>
          <ProfileOption>
            <IconLogout />
            <ProfileOptionCard>
              <ProfileOptionTextCard>
                <ProfileOptionTitle>Logout</ProfileOptionTitle>
              </ProfileOptionTextCard>
              <IconArrow />
            </ProfileOptionCard>
          </ProfileOption>
        </MoreCard>
      </Container>
    </ScrollView>
  );
};
