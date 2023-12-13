import React, { useEffect, useState } from 'react';
import { Container, ListBanner } from './styles';
import { useRoute } from '@react-navigation/native';

import Banner from '../../components/cards/banner/bannerComp'





export default () => {

  const obj = [
    {
      id: 1,
      title: 'Entrega gratuita por 1 mês',
      subtitle: 'Você precisa fazer um pedido de pelo menos 10€ para usar a entrega gratuita por 1 mês.',
      image: '../../../assets/images/exemple.png',
    },
  
  ]



  const route = useRoute();
  useEffect(() => {
    console.log(route.params);
  }, []);
  return (


    <Container>
      <ListBanner 
      data={obj}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Banner title={item?.title} subtitle={item?.subtitle} image={item?.image}/>
      )}>

      </ListBanner>
      
    </Container>
  );
};
