import React, { useEffect } from 'react';
import { Container } from './styles';
import { useRoute } from '@react-navigation/native';
import ButtonPrimary from '../../components/buttons/primaryButton';
import ButtonSecondary from '../../components/buttons/secondaryButton';

export default () => {
  const route = useRoute();
  useEffect(() => {
    console.log(route.params); // Aqui a gente usa route.params
  }, []);
  return (
    <Container>
      <ButtonPrimary text="Teste"/>
      <ButtonSecondary text="Teste"/>
    </Container>
  );
};
