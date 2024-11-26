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
     
      <Link style={styles.log1} href= "/login">Faça seu login</Link>
    

      <Link style={styles.log2} href= "/cadastro">Crie sua conta</Link>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#320244',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  log1: {
    backgroundColor: "#b2b2b2",
    color: '#320244',
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    textAlign: 'center',
  },
  log2: {
    backgroundColor: "#b2b2b2",
    color: '#320244',
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    textAlign: 'center',
  },
});