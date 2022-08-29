import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FAB from '../components/FAB';

const CounterScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Contador: {contador}</Text>
        <FAB
          position="bl"
          title="-1"
          onPress={() => setContador(contador - 1)}
        />
        <FAB
          position="br"
          title="+1"
          onPress={() => setContador(contador + 1)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  fabLocationBL: {position: 'absolute', bottom: 25, left: 25},
  fabLocationBR: {position: 'absolute', bottom: 25, right: 25},
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    top: -15,
  },
});

export default CounterScreen;
