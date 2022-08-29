import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RelativePosScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // Por defecto todos los objetos tienen posicion relativa
  container: {
    flex: 1,
    // width: 300,
    height: 300,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    top: 20,
    left: 50,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    // borderColor: 'white',
  },
});
export default RelativePosScreen;
