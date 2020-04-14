import React, { useState } from 'react';
import styles from '../estyles/styles';
import { Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default function contador() {
    const [count, setCount] = useState(0);

    return (
        <View style={{paddingTop:70}}>
             <Text>Valor: {count}</Text>
            <TouchableHighlight
                onPress={() => setCount(count + 1)}
                onLongPress={()=> setCount(0) }>
                
               <Text style={{paddingTop:50, paddingHorizontal:100}}>Click</Text>
            </TouchableHighlight>
        </View>
    )
}