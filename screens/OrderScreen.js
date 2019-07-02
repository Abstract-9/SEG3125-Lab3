import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class OrderScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button}
                         title="Button"
                         onPress={() => {}}/>
            </View>
        );
    }
}

OrderScreen.navigationOptions = {
    drawerLabel: 'Checkout'
};


const styles = StyleSheet.create({
    container: {
        flex:1
    }
});
