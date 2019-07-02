import React, {Component} from 'react';
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    Picker,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MonoText } from '../components/StyledText';

export default class MenuScreen extends Component {

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {

        const { search } = this.state;

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

                    <Text style={styles.restaurantTitle}>ChickenStop</Text>

                    <View style={styles.menuItem}>
                        <Text style={styles.foodName}>borger</Text>
                        <Text style={styles.foodPrice}>10.50</Text>
                        <Picker style={styles.picker}>
                            <Picker.Item label="1" value="1"/>
                            <Picker.Item label="2" value="2"/>
                            <Picker.Item label="3" value="3"/>
                            <Picker.Item label="4" value="4"/>
                            <Picker.Item label="5" value="5"/>
                            <Picker.Item label="6" value="6"/>
                            <Picker.Item label="7" value="7"/>
                            <Picker.Item label="8" value="8"/>
                            <Picker.Item label="9" value="9"/>
                        </Picker>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

MenuScreen.navigationOptions = {
    header: null,
    drawerLabel: 'Index'
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
    contentContainer: {
        paddingTop: 30,
    },
    menuItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    foodName: {
        marginLeft: 5
    },
    foodPrice: {
        marginLeft: 25
    },
    restaurantTitle: {
        marginTop: 45,
        fontSize: 30
    },
    picker: {
        marginLeft: 40
    }
});
