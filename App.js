import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

class App extends Component {

  isLoadingComplete = useState(false)[0];
  setLoadingComplete = useState(false)[1];

  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  render() {
    if (!isLoadingComplete && !props.skipLoadingScreen) {
      return (
          <AppLoading
              startAsync={loadResourcesAsync}
              onError={handleLoadingError}
              onFinish={() => handleFinishLoading(setLoadingComplete)}
          />
      )
    } else {
      return (
          <View style={styles.container}>
            <AppNavigator/>
          </View>
      );
    }
  }
}

// async function loadResourcesAsync() {
//   await Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     Font.loadAsync({
//       // This is the font that we are using for our tab bar
//       ...Ionicons.font,
//       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
//       // remove this if you are not using it in your app
//       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//     }),
//   ]);
// }

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppNavigator
