import * as React from 'react';
import { StyleSheet } from 'react-native';


import {View, Text} from 'react-native';


export default function Videos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});