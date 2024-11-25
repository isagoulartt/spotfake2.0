import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";
import {Link} from 'expo-router';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#320244",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
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
    tituloPrincipal: {
        fontSize: 32,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 20,
        color: '#ffffff',
    },
    titulo: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 30,
        color: '#320244',
    },
    inputView: {
        width: "100%",
    },
    input: {
        height: 45,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        fontSize: 16,
        color: "#333",
    },
    botao: {
        alignItems: "center",
        marginTop: 20,
    },
    botaotexto: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        textAlign: 'center',
        shadowColor: "#007bff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
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
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('Os parâmetros email, nome e senha devem ser fornecidos');
            return;
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name: nome, email: email, password: senha }),
        });

        if (!resposta) {
            console.log('Erro na conexão');
        } else if (resposta.status === 200) {
            console.log('Bem-vindo!');
        } else {
            console.log('Ocorreu um erro');
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.tituloPrincipal}>Bem-vindo à Aura</Text>
            <View style={style.box}>
                <Text style={style.titulo}>Faça login</Text>
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
                    <View style={style.botao}>
                        <Pressable onPress={registrarUsuario}>
                            <Link style={style.log} href= "/Home">Entrar</Link>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
