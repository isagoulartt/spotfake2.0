import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Link } from "react-native";

const style = StyleSheet.create({
    
        container: {
          flex: 1, 
          backgroundColor: "#4F2A58", 
          padding: 20,
           
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
          color:'#b2b2b2'
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
      });


export default SinUp = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

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
       
        <View >
            <Text style={style.titulo}>Faça login</Text>
        </View>
        <View style={style.inputView}>
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
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />

            <View style={style.botao} >
                <Pressable onPress={registrarUsuario}>
                    <Text style={style.botaotexto}>Entrar</Text>
                    
                </Pressable>
            </View>
</View>
       
    </SafeAreaView>

)
}
