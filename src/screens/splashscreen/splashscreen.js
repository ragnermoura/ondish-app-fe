import React, { useEffect, useState } from 'react';
import { Container, ListBanner } from './styles';
import { useRoute } from '@react-navigation/native';
// import {Image} from 'react-native';

import Banner from '../../components/cards/ads/adsComp'




export default () => {

  const obj = [
    {
      id: 1,
      title: 'Entrega gratuita por 1 mês',
      subtitle: 'Você precisa fazer um pedido de pelo menos 10€ para usar a entrega gratuita por 1 mês.',
      pic: 'https://lh3.googleusercontent.com/pw/ABLVV875iZNjYImoDp1tyeOnqVcF9FUoBVE4swJiTt2bAiALMqpJ3-vswLIjeBuLnZfFxOnkELF-Z6JsuZAeJ8LC9IyEVuvUjSyRK_dV_GnDm08DbRLNonYPF12R1piw_Ev45YkZPPG5jZwurLdoQ0KbPrrv=w364-h185-s-no-gm?authuser=0'
    },
  
  ]



  const route = useRoute();
  useEffect(() => {
    console.log(route.params);
  }, []);
  return (


    <Container>
      {obj.map(item => (
        <Banner 
        key={item.id} title={item.title} 
        subtitle={item.subtitle}
        pic={item.pic} 
        />
      ))}
    </Container>
  );
};
