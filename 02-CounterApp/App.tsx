import React from 'react';
import {SafeAreaView} from 'react-native';
import AbsolutePosScreen from './src/screens/AbsolutePosScreen';
// import DimensionsScreen from './src/screens/DimensionsScreen';
// import BOMScreen from './src/screens/BOMScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import HolaMundo from './src/screens/HolaMundo';
// import RelativePosScreen from './src/screens/RelativePosScreen';

const App = () => {
  return (
    <>
      {/* <HolaMundo /> */}
      {/* <CounterScreen /> */}
      {/* En iOS se asegura que el contenido no choque con el nutch */}
      <SafeAreaView style={{flex: 1}}>
        {/* <BOMScreen /> */}
        {/* <DimensionsScreen /> */}
        {/* <RelativePosScreen /> */}
        <AbsolutePosScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
