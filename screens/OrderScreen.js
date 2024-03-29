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
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>

                    <View style={styles.container}>
                        <TouchableHighlight onPress={() => {
                            this.props.navigation.openDrawer();
                        }}>
                            <Image
                                style={styles.menuButton}
                                source={require('../assets/images/robot-prod.png')}
                            />
                        </TouchableHighlight>
                    </View>

                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../assets/images/robot-dev.png')}
                            style={styles.welcomeImage}
                        />
                    </View>

                    <View>
                        <Text style = {{fontSize:30, textAlign: 'center'}}>
                            McDonald's
                        </Text>
                        <Image
                            source={require('../assets/images/mc.png')}
                            style={styles.menuPicture}
                        />
                    </View>

                    <View style = {{paddingLeft: 100, paddingRight: 100, paddingBottom: 66}}>
                        <Button
                            title="Menu"
                            onPress={() => {this.props.navigation.navigate('Menu')}}

                        />
                    </View>

                    <View>
                        <Text style = {{fontSize:30, textAlign: 'center'}}>
                            Chickens's
                        </Text>
                        <Image
                            source={require('../assets/images/chicken.jpg')}
                            style={styles.menuPicture}
                        />
                    </View>

                    <View style = {{paddingLeft: 100, paddingRight: 100, paddingBottom: 66}}>
                        <Button
                            title="Menu"
                            onPress={() => {this.props.navigation.navigate('Menu')}}

                        />
                    </View>

                    <View>
                        <Text style = {{fontSize:30, textAlign: 'center'}}>
                            Tacos's
                        </Text>
                        <Image
                            source={require('../assets/images/taco.jpg')}
                            style={styles.menuPicture}
                        />
                    </View>

                    <View style = {{paddingLeft: 100, paddingRight: 100, paddingBottom: 66}}>
                        <Button
                            title="Menu"
                            onPress={() => {this.props.navigation.navigate('Menu')}}

                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

HomeScreen.navigationOptions = {
    header: null,
    drawerLabel: 'Home'
};


const styles = StyleSheet.create({

    menuButton:{
        textAlign:'left',
        width: 60,
        height: 60,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    menuPicture:{
        alignItems:'center',
        marginLeft: 100,
        marginRight:100,
        marginBottom:30,
        marginTop:15,
        resizeMode: 'contain',
        width: 160,
        height: 160,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
