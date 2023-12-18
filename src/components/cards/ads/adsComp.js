import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import config from '../../../../assets/config.json'
import { StyleSheet, Text, ImageBackground, View} from 'react-native'



const styles = StyleSheet.create({

  imageConfig: {
    flex: 1,
    height: 185,
    marginTop: 50,
    resizeMode: 'contain',
    borderRadius: 50
  },

  container: {
    minHeight: 185,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: 'rgba(205, 128, 125, 0.2)'
  },

  title: {
    color: `${config.colors.black}`,
    fontSize: 28,
    letterSpacing: 0.18,
    lineHeight: 36,
  },

  subTitle: {
    color: `${config.colors.dark}`,
    fontSize: 16,
    letterSpacing: 0.4,
    marginTop: 10,
    lineHeight: 24,
  },

})

const Banner = ({pic, title, subtitle }) => {
    return (
      <ImageBackground source={{uri: pic}} style={styles.imageConfig} >
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subtitle}</Text>   
        </View>
      </ImageBackground>
    );
}

export default Banner;