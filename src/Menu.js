//import { createDrawerNavigato } from 'npm install @react-navigation/native';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from '../src/component/Simples';
import ParImpar from '../src/component/ParImpar';
import Inverter, { MegaSena } from "../src/component/mult";
import Contador from './component/contador';
import Plataforma from './component/Plataformas';
import Evento from './component/Event';
import Avo from './component/ComunicaçãoDireta';
import TextoSincronizado from './component/ComunicaçãoIndireta';
import ListaFlex from './component/ListaFlex';
import Flex from './component/Flex';

const Drawer = createDrawerNavigator();

export default function menu() {

    return (
        <NavigationContainer>

            <Drawer.Navigator initialRouteName="Menu">
                <Drawer.Screen name="Flex" component={Flex} />
                <Drawer.Screen name="Lista Flex" component={ListaFlex} />
                <Drawer.Screen name="Comuni-Indireta" component={TextoSincronizado} />
                <Drawer.Screen name="Comuni-Direta" component={Avo} />
                <Drawer.Screen name="Evento" component={Evento} />
                <Drawer.Screen name="Plataforma" component={Plataforma} />
                <Drawer.Screen name="Contador" component={Contador} />
                <Drawer.Screen name="Mega sena" component={MegaSena} />
                <Drawer.Screen name="Inverter" component={Inverter} />
                <Drawer.Screen name="ParImpar" component={ParImpar} />
                <Drawer.Screen name="Simples" component={Simples} />
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

// export default createDrawerNavigato({
// //     MegaSena:{
// //         Screen: () => <MegaSena numeros={8} />,
// //         navigationOptions:{title: 'Mega sena'}
// //     },
// //     Inverter:{
// //         Screen: () => <Inverter texto="React Nativo" />,
// //     },
// //     ParImpar:{
// //         Screen: () => <ParImpar  numero={30} />,
// //         navigationOptions:{title: 'Par e Impar'}
// //     },
// //     Simples:{
// //         Screen: () => <Simples texto="Flexivel" />
// //     }
// }, {drawerWidth: 300})