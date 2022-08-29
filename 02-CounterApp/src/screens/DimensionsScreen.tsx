import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  useWindowDimensions,
  Text,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <>
      <View>
        <View style={styles.container}>
          <View style={{...styles.cajaMorada, width: width * 2}} />
          <View style={styles.cajaNaranja} />
        </View>
        <Text style={styles.title}>
          W : {width}, H: {height}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: 200, backgroundColor: 'red'},
  cajaMorada: {backgroundColor: '#5856d6', width: '50%', height: '50%'},
  cajaNaranja: {backgroundColor: '#F0A23B'},
  title: {fontSize: 30, textAlign: 'center'},
});

export default DimensionsScreen;
