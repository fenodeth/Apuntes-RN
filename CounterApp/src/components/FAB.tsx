import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

const FAB = ({title, onPress, position}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {position: 'absolute', bottom: 25},
  right: {right: 25},
  left: {left: 25},
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 2,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default FAB;
