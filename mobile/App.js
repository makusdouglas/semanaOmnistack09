import React from 'react';
import {YellowBox} from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return <Routes/>
}
//PAREI EM 34:00:00 
//rodar com yarn start

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
