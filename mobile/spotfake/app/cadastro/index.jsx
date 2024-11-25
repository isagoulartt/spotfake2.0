import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";
import {Link} from 'expo-router';

const style = StyleSheet.create({
    
    container: {
      flex: 1, 
      backgroundColor: "#320244", 
      padding: 20,
      justifyContent:'center',
      alignItems:'center'
       
    },
    box: {
      backgroundColor: "#fff", 
      borderRadius: 10,
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2, 
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'#f5f5f5'
    },
    titulo: {
      fontSize: 24, 
      fontWeight: "bold", 
      textAlign: "center", 
      marginBottom: 20, 
      color:'#320244'
    },
    inputView: {
      marginBottom: 20, 
    },
    input: {
      height: 40, 
      padding: 10, 
      backgroundColor: "#eee", 
      borderRadius: 5, 
      borderColor: "#ccc", 
      borderWidth: 1, 
      marginBottom: 10, 
    },
    botao: {
      alignItems: "center", 
    },
    botaotexto: {
      fontSize: 18, 
      color: "#fff", 
      backgroundColor: "#007bff", 
      padding: 10, 
      borderRadius: 5, 
    },
    box: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#fff",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },

    log: {
        backgroundColor: '#320244', 
        paddingVertical: 10,       
        paddingHorizontal: 20,     
        borderRadius: 5,           
        textAlign: 'center',       
        color: '#fff',           
        fontSize: 16,             
     
      },
  });

export default SinUp = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('os parametros email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({ name: nome, email: email, password: senha })
        })
        
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('bem vindo!')
    } else {
        console.log('ocorreu um erro')
    }
}


return (
    <SafeAreaView style={style.container}>
      <View style={style.box}>
        <View >
            <Text style={style.titulo}>Cadastre-se</Text>
        </View>
        
        <View style={style.inputView}>
            <TextInput
                style={style.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Digite seu nome"
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setSobrenome(text)}
                value={sobrenome}
                placeholder="Digite sua sobrenome"
                
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setDataNascimento(text)}
                value={dataNascimento}
                placeholder="Digite sua data de nascimento"
              
            />

             <TextInput
                style={style.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Digite seu email"
            />

            <TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Crie sua senha"
                secureTextEntry={true}
            />

            <View style={style.botao}>
            <Pressable onPress={registrarUsuario}>
            <Link style={style.log} href= "/Home">Cadastre-se</Link>
            </Pressable>
            </View>
            </View>
            
            </View>
       
    </SafeAreaView>

)
}
