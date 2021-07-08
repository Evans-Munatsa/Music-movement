import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import Classes from './screens/Classes';

export default function App() {
  
   return <Classes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
