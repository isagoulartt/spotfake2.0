import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

  
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

    const artistasFavoritos = [
      { id: '1', nome: 'Jorge e Mateus', imagem: '../img/jem.png' },
      { id: '2', nome: 'The weeknd', imagem: '../img/twknd.png' },
      { id: '3', nome: 'Matue', imagem: '../img/tue.png' },
      { id: '4', nome: 'Charlie Brown Jr', imagem: '../img/cbjr.png' },
    ];
  
    return (
      <View style={styles.container}>
       
        <View style={styles.cabecalho}>
    
          <Image
            source={{ uri: '' }}
            style={styles.imagemPerfil}
          />
          <Text style={styles.nomeUsuario}>User</Text>
          <Text style={styles.descricaoUsuario}>Descrição</Text>
        </View>
      
        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Artistas Favoritos</Text>
          <FlatList
            data={artistasFavoritos}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.artistaItem}>
                <Image source={{ uri: item.imagem }} style={styles.imagemArtista} />
                <Text style={styles.nomeArtista}>{item.nome}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  };
  

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#320244',
    padding: 20,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagemPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  nomeUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#919191',
  },
  descricaoUsuario: {
    fontSize: 16,
    color: '#919191',
    marginTop: 5,
    textAlign: 'center',
  },
  secao: {
    marginVertical: 20,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#919191',
    marginBottom: 10,
  },
  listaGeneros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  generoItem: {
    backgroundColor: '#e0e0e0',
    padding: 8,
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

