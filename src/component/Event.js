import React, { useState, Component } from 'react';
import styles from '../estyles/styles';
import { Text, View, TextInput } from 'react-native';

export default function Evento() {

    const [texto, setTexto] = useState('');

    alterarTexto = texto => {
        setTexto(texto);
    }

    return (
        <View>
            <Text style={styles.font40}>{texto}</Text>
            <TextInput value={texto}
                style={styles.input}
                onChangeText={alterarTexto}></TextInput>
        </View>

    )
}