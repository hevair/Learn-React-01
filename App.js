import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Simples from './src/component/Simples';

// import ParImpar from './src/component/ParImpar';
// import Inverter,{MegaSena}  from "./src/component/mult";

import Menu from './src/Menu'

export default function App() {
  return (
     <Menu/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
