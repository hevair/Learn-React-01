import React, { useState } from 'react';
import styles from '../estyles/styles';
import { Text, View } from 'react-native';

const font = { style: { fontSize: 30 } }

export function Filho(props) {
    return (
        <View>
            <Text {...font}>Filho: {props.nome} {props.sobrenome}</Text>
        </View>
    )
}
export const Pai = props => {

    return (
        <View>
            <Text {...font}>Pai: {props.nome} {props.sobrenome}</Text>
            {props.children}
            
        </View>
    )

}

const props = () =>{
    return {
        nome: "Pedro",
        sobrenome: "Silva"
    }
}

export default function Avo() {
    return (
        <View>
            <Text {...font}>Avo: {props().nome  } {props().sobrenome }</Text>
            <Pai nome="Andre" sobrenome={props().sobrenome}>
                <Filho nome="Ana"></Filho>
                <Filho nome="Gui"></Filho>
                <Filho nome="Davi"></Filho>
            </Pai>
            <Pai {...props()} nome="Pedro">
                <Filho nome="Rebeca"></Filho>
                <Filho nome="Renato"></Filho>
            </Pai>
        </View>
    )
}

