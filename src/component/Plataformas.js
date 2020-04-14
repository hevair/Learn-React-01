import React from 'react';
import { Text, View } from 'react-native';
import { Button, Alert, ToastAndroid, Platform } from "react-native";

export default function plataforma() {

    function notificarMsg(msg) {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informação', msg)
        }
    }

    return (
        <View style={{paddingTop:70}}>
            <Button title='Plataforma?'
                onPress={() => notificarMsg('Parabens')}
            ></Button>
        </View>

    )

}