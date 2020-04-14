import React from 'react';
import {Text} from 'react-native';
import styles from '../estyles/styles';

function exibir (){
   return "Meu APP";
}

export default function simples (){
    
    return <Text style={styles.ex}>{exibir()}</Text>
}