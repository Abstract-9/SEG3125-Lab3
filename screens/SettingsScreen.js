import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render() {
    return <Text>Settings</Text>;
  }
}

SettingsScreen.navigationOptions = {
  drawerLabel: 'settings',
};
