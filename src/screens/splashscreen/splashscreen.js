import React, { useEffect, useState } from 'react';
import { Container, ListBanner } from './styles';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, ImageBackground, View, Image} from 'react-native'

import styled from 'styled-components/native';

// import Banner from '../../components/cards/ads/adsComp'
// import Banner from '../../components/cards/partners/partnersComp'
import Banner from '../../components/cards/search/searchComp'

const MasterContainer = styled.View`
  margin-top: 50px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;

`;


export default () => {

  // const obj = [
  //   {
  //     id: 1,
  //     title: 'Entrega gratuita por 1 mês',
  //     subtitle: 'Você precisa fazer um pedido de pelo menos 10€ para usar a entrega gratuita por 1 mês.',
  //     pic: 'https://lh3.googleusercontent.com/pw/ABLVV875iZNjYImoDp1tyeOnqVcF9FUoBVE4swJiTt2bAiALMqpJ3-vswLIjeBuLnZfFxOnkELF-Z6JsuZAeJ8LC9IyEVuvUjSyRK_dV_GnDm08DbRLNonYPF12R1piw_Ev45YkZPPG5jZwurLdoQ0KbPrrv=w364-h185-s-no-gm?authuser=0'
  //   },
  
  // ]

  // const partners = [
  //   {
  //     id: 1,
  //     title: "McDonald's",
  //     tags: 'Chinese / American',

  //     iconFree: "https://softwareprecisao.com.br/ondish/iconFreeDelivery.png",

  //     iconFast: 'https://softwareprecisao.com.br/ondish/iconDeliveryFast_.png',
      

  //     time: '25 Minutos',
  //     price: 'FREE',
  //     rating: 4.5,
  //     background: 'https://www.farofamagazine.com.br/wp-content/uploads/2022/01/mat-20191021190905mc-donalds.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: "KFC",
  //     tags: 'Brazilian / American',

  //     iconFree: "https://softwareprecisao.com.br/ondish/iconFreeDelivery.png",

  //     iconFast: 'https://softwareprecisao.com.br/ondish/iconDeliveryFast_.png',
      

  //     time: '25 Minutos',
  //     price: 'FREE',
  //     rating: 4.9,
  //     background: 'https://mercadoeconsumo.com.br/wp-content/uploads/2022/10/International-Meal-Company-firma-novo-acordo-para-uso-da-marca-KFC-shutterstock_1308118438-scaled.jpg',
  //   },

  // ]

  const search = [
    {
      id: 1,
      title: "Nethai Kitchen",
      tags: 'Chinese / American',

      iconFree: "https://softwareprecisao.com.br/ondish/iconFreeDelivery.png",

      iconFast: 'https://softwareprecisao.com.br/ondish/iconDeliveryFast_.png',
      

      time: '25 Minutos',
      price: 'FREE',
      rating: 4.5,
      background: 'https://www.findandeat.com.br/wp-content/uploads/2017/06/lahuellamesa.jpg',
    },
    {
      id: 2,
      title: "Lazy Bear",
      tags: 'Brazilian / American',

      iconFree: "https://softwareprecisao.com.br/ondish/iconFreeDelivery.png",

      iconFast: 'https://softwareprecisao.com.br/ondish/iconDeliveryFast_.png',
      

      time: '25 Minutos',
      price: 'FREE',
      rating: 4.9,
      background: 'https://www.wzhoteljardins.com.br/wp-content/uploads/2020/10/WZ-Hotel-Jardins-955-Lounge-e-Restaurante-19.jpg',
    },

  ]

  



  const route = useRoute();
  useEffect(() => {
    console.log(route.params);
  }, []);
  return (


    <Container>

      {/* ADS COMP 
      {obj.map(item => (
        <Banner 
        key={item.id} title={item.title} 
        subtitle={item.subtitle}
        pic={item.pic} 
        />
      ))}*/}
      <MasterContainer>
      {search.map(item =>(
        <Banner
          key={item.id}
          background={item.background}
          title={item.title}
          tags={item.tags}
          iconFast={item.iconFast}
          time={item.time}
          iconFree={item.iconFree}
          price={item.price}
          rating={item.rating}
        />
      ))}
      </MasterContainer>


    </Container>
  );
};
