import React, { useState, Component } from 'react';
import styles from '../estyles/styles';
import { Text, View, TextInput } from 'react-native';

export function Entrada(props) {
    return (
        <View>
            <TextInput value={props.texto}
                style={styles.input}
                onChangeText={props.chamarQuandoMudar}>

            </TextInput>
        </View>
    )
}

export default function TextoSincronizado() {
    const [texto, setTexto] = useState('');

    alterarTexto = texto => {
        setTexto(texto);
    }

    return (
        <View>
            <Text style={styles.font40}>{texto}</Text>
            <Entrada texto={texto} chamarQuandoMudar={alterarTexto} ></Entrada>
        </View>

    )
}