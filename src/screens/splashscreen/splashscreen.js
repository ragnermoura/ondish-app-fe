import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Logo, LoadingIcon} from './styles';


export default () => {
  const navigation = useNavigation();
   useEffect(() => {
     const checkToken = async () => {
       try {
         const token = await AsyncStorage.getItem('token');
         if (!token) {
           navigation.reset({
             routes: [{ name: 'Welcome' }]
           });
         } else {
           navigation.reset({
             routes: [{ name: 'MainTab' }]
           });
         }
       } catch (error) {
         console.error("Erro ao buscar o token", error);
       }
     };

     checkToken();
   }, []);

  return (
    <Container>
      <Logo />
      <LoadingIcon size="large" color="red" />
    </Container>
  );
};
