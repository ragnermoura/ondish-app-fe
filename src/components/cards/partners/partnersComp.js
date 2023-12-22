import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import config from '../../../../assets/config.json'
import { StyleSheet, Text, ImageBackground, View, Image} from 'react-native'
import { render } from 'react-native-web';



const styles = StyleSheet.create({


  main: {
    width: '46%',
    marginRight: '2%',
    marginLeft: '2%',
    marginBottom: 30,
    height: 350,
  },

  imageConfig: {
    MaxWidth: 160,
    height: 280,
    resizeMode: 'center',
    borderRadius: 15,
    overflow: "hidden",    
  },

  container: {
    flex:4,
    MaxWidth: 160,
    Height: 280,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0
  },

  boxTitle: {
  },

  title: {
    color: `${config.colors.black}`,
    fontSize: 20,
    letterSpacing: 0.44,
    fontWeight: 'bold',
    marginTop: 15
  },

  subTitle: {
    color: `${config.colors.placeholder}`,
    fontSize: 16,
    letterSpacing: 0.4,
    marginTop: 5,
    lineHeight: 24,
  },

  iconFast: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 50,
    left: 10
  },

  textFast: {
    position: 'absolute',
    bottom: 51,
    left: 35,
    fontSize: 14,
    color: '#fff'
  },

  iconFree: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 20,
    left: 10,
    display: 'block'
  },

  textFree: {
    position: 'absolute',
    bottom: 21,
    left: 35,
    fontSize: 14,
    color: '#fff'
  },

  rating: {
    width: 50,
    padding: 3,
    backgroundColor: `${config.colors.red}`,
    position: 'absolute',
    bottom: 19,
    right: 10,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5
  }

})



const Banner = ({background, title, tags, iconFree, iconFast, rating, time, price }) => {
    return (

      <View style={styles.main}>
        <ImageBackground source={{uri: background}} style={styles.imageConfig} >
          <View style={styles.container}>
            <Image source={{uri: iconFast}} style={styles.iconFast}/>
            <Text style={styles.textFast}>{time}</Text>
            <Image source={{uri: iconFree}} style={styles.iconFree}/>
            <Text style={styles.textFree}>{price}</Text>
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </ImageBackground>

          <View style={styles.boxTitle}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{tags}</Text>   
          </View>
        </View>
      
    );
}

export default Banner;