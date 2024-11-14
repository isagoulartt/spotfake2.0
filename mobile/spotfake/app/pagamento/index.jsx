import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, Image} from "react-native";
import { Link } from "expo-router";

export default Pagamento = () => {
        const [nome, setNome] = useState('');
        const [numero, setNumero] = useState('');
        const [dataValidade, setDataValidade] = useState('');
        const [cvv, setCvv] = useState('');
        const MudarNome = (nome) => setNome(nome);
        const MudarNumero = (numero) => setNumero(numero);
        const MudarDataValidade = (dataValidade) => setDataValidade(dataValidade);
        const MudarCvv = (cvv) => setCvv(cvv);

    return <View style={style.container}>
    <View style={style.body}>
    <View style={style.log} >
        <Image 
        style={style.image}
        source={require('../../../spotfake/app/img/logo1.png')}/>
        <Text style={style.logo}>AURA</Text>
    </View>
        <Text style={style.text}>Conta Bancária</Text>
        <Text style={style.text2}>Adicionar Cartão</Text>
        <TextInput 
                style={style.input}
                onChangeText={MudarNome}
                value={nome}
                placeholder=" Nome no Cartão"
        />
                <TextInput 
                style={style.input}
                onChangeText={MudarNumero}
                value={numero}
                placeholder=" Número do Cartão"
        />
                <TextInput 
                style={style.input}
                onChangeText={MudarDataValidade}
                value={dataValidade}
                placeholder=" Data de Validade"
        />
                <TextInput 
                style={style.input}
                onChangeText={MudarCvv}
                value={cvv}
                placeholder=" CVV"
        />
      
    </View>
    </View>
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#4F2A58',
        height: '100%',
        width: '100%',  
    },
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',  
    },
    image: {
        width: 45,
        height: 45
    },
    log: {
        flexDirection: 'row',
        gap: 10
    },
    logo: {
        fontSize: 40,
        color: '#919191',
        marginBottom: 30,
    },
    text: {
        fontSize: 25,
        color: '#919191',
        marginBottom: 20,
    },
    text2: {
        fontSize: 27,
        color: '#919191',
        marginBottom: 20,
        marginTop: 20,
    },
    input: {
        border: '1px solid #E8DAEF',
        backgroundColor: '#E8DAEF',
        fontSize: 15,
        marginBottom: 15,
        borderRadius: 50,
        color: '#919191',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
    },
    link: {
        color: '#919191',
        fontSize: 15,
        marginBottom: 30,
        marginTop: 20,
    },
    button: {
        border: '1px solid #919191',   
        borderRadius: 50,
        backgroundColor: '#919191',
        marginBottom: 30,
        marginTop: 20,
    },
    butt: {
        color: 'white',
        fontSize: 20,
    },
})