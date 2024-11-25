import { View, StyleSheet, Image} from 'react-native';
import {Link} from 'expo-router';



export default function App() {

const logoSpotify =

''

return (
    <View style={styles.container}>

      <Image style= {styles.logo} source={require('./img/logo1.png')} /> 
      
      <Image
        style={styles.logo}
        source={{
          uri : logoSpotify,
        }}
      />
      <Link style={styles.log} href= "/login">Faça seu login</Link>

      <Link style={styles.log} href= "/cadastro">Crie sua conta</Link>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor:'#320244',
      justifyContent: 'center',
    },
    background:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    logo:{
      width: 100,
      height: 100,
      alignItems:'center',
      justifyContent:'center'
    },

    log:{
      color:"#b2b2b2",
      alignContent:'center'
    }
  });