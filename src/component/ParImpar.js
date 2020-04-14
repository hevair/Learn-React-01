import React from 'react';
import { View, Text } from 'react-native';

import styles from '../estyles/styles';

function numero (){
    return 11
}

export default function parImprt() {
    return (
        <View>
            {
                numero() % 2 == 0 
                                    ? <Text style={styles.ex}>Par</Text>
                                    : <Text style={styles.ex}>Impar</Text>
            }
        </View>
    );
}