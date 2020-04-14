import React, { useState } from 'react';
import styles from '../estyles/styles';
import { ScrollView,Text, View, FlatList, StyleSheet } from 'react-native';

const stylesNew = StyleSheet.create({
    constainer:{
        height: '100%',
    },
    norte:{
        flex:1,
        backgroundColor:'#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centro:{
        flex:2,
        flexDirection: 'row',
        backgroundColor:'#f2f9bd',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sul:{
        flex: 1,
        backgroundColor:'#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circulo:{
        width:100,
        height:100,
        backgroundColor: '#f47f61',
        borderRadius:50,
    }
})

const Circulo = props => <View style={stylesNew.circulo}></View>

export default function desing (props){
    return (
        <View style={stylesNew.constainer}>
            <View style={stylesNew.norte}>
                <Circulo></Circulo>
            </View>
            <View style={stylesNew.centro}>
            <Circulo></Circulo>
            <Circulo></Circulo>
            <Circulo></Circulo>
            </View>
            <View style={stylesNew.sul}>
            <Circulo></Circulo>
            </View>
        </View>
    )
}