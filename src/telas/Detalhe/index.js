import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Topo from '../../componentes/Topo';
import Texto from '../../componentes/Texto';
import useTextos from '../../hooks/useTextos';

import sucesso from '../../assets/sucesso.png';

export default function Detalhe () {
    const { headerDetalhe, tituloDetalhe, mensagemCompra, botaoVoltarHome, botaoVoltarProdutor } = useTextos();

    const navigation = useNavigation();

    const route = useRoute();
    const {produtor,nome} = route.params;

    const mensagem = mensagemCompra?.replace('$NOME', nome);

    return <>
        <Topo titulo={headerDetalhe} imagem = {sucesso} altura = {400}/>
        <View style={estilos.detalhe}>
            <Texto style={estilos.titulo}>{ tituloDetalhe }</Texto>
            <Texto style={estilos.mensagem}>{ mensagem }</Texto>
            <TouchableOpacity 
                style={estilos.botaoHome} 
                onPress={() => navigation.navigate('HomeScreen')}>
                <Texto style={estilos.textoBotaoHome}>{ botaoVoltarHome }</Texto>
            </TouchableOpacity>
            <TouchableOpacity 
                style={estilos.botaoProdutor}
                onPress={() => navigation.navigate('Produtor', produtor)}>
                <Texto style={estilos.textoBotaoProdutor}>{ botaoVoltarProdutor }</Texto>
            </TouchableOpacity>
        </View>
    </>

}

const estilos = StyleSheet.create({
    detalhe: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    mensagem: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    botaoHome : {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotaoHome : {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    botaoProdutor : {
        marginTop: 16,
        backgroundColor: "#ffffff",
        paddingVertical: 16,
        borderRadius: 6,
        borderColor: "#464646",
    },
    textoBotaoProdutor : {
        textAlign: "center",
        color: "#464646",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
});