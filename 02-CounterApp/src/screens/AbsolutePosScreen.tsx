import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AbsolutePosScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cajaVerde} />
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // Por defecto todos los objetos tienen posicion relativa
  container: {
    // flex: 1,
    height: 400,
    width: 400,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 5,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    position: 'absolute',
    bottom: 0,
    right: 5,
    // borderColor: 'white',
  },
  cajaVerde: {
    backgroundColor: 'green',
    borderWidth: 10,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
    borderColor: 'white',
  },
});
export default AbsolutePosScreen;
