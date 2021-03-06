/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/Navigation/MainNavigation';
import { StatusBar } from "react-native";
import { Colors } from "./src/utils";
const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])

  return (
    <>
      <StatusBar

        barStyle='dark-content'
        backgroundColor={Colors.TabHeader}
      />
      <MainNavigation />
    </>
  );

};
export default App;
