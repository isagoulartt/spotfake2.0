import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {Link} from 'expo-router';
  
    const pickImage = async () => {
    
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
  const handletSendImage = async () =>{
  try{
    const data = {
      "file": image,
      "upload_preset": 'ml_default',
      "name": 'teste',
    }
    const res = await fetch ('http://api.cloudinary.com/v1_1/dywd7cidx/upload',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    });
  const result = await res.json();
  console.log(result);
  }
  catch (e){
    console.log(e)
  }
  };

 export default TelaPerfil = () => {

   
    return (
      <View style={styles.container}>
       
        <View style={styles.cabecalho}>
        <Text style={styles.nomeUsuario}>Inicio</Text>

        <View style={styles.img}>

        </View>

        <View style={styles.botao}>
        <Pressable onPress={Pagamento}>
        <Link style={styles.log} href= "/perfil"> Acesse seus artistas favoritos </Link>
        </Pressable>
        </View>
        </View>
      
        <View style={styles.botao}>
        <Pressable onPress={Pagamento}>
        <Link style={styles.log} href= "/pagamento">Realize seu pagamento</Link>
        </Pressable>
        </View>
           
        </View>
    
    );
  };
  

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#320244',
      padding: 20,
      justifyContent: 'center',
    },
    cabecalho: {
      alignItems: 'center',
      marginBottom: 30,
    },
    imagemPerfil: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: '#ccc',
      marginBottom: 15,
    },
    nomeUsuario: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#b2b2b2',
      marginBottom: 10,
    },
    botao: {
      marginVertical: 10,
      width: '70%', 
      alignSelf: 'center',
    },
    log: {
      backgroundColor: '#b2b2b2',
      paddingVertical: 12, 
      paddingHorizontal: 15, 
      borderRadius: 10, 
      textAlign: 'center',
      color: '#320244',
      fontSize: 16,
      fontWeight: 'bold',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    generoItem: {
      backgroundColor: '#e0e0e0',
      padding: 10,
      borderRadius: 20,
      marginRight: 10,
      marginBottom: 10,
    },
    generoTexto: {
      fontSize: 14,
      color: '#919191',
    },
    artistaItem: {
      alignItems: 'center',
      marginRight: 20,
    },
    imagemArtista: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#ccc',
      marginBottom: 5,
    },
    nomeArtista: {
      fontSize: 14,
      color: '#919191',
      textAlign: 'center',
    },
  });