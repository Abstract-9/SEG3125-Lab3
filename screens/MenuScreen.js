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

                    <View style={styles.seperator}/>
                    <View style={styles.menuItem}>
                        <Text style={styles.foodName}>borger</Text>
                        <Text style={styles.foodPrice}>$10.50</Text>
                        <Button style={styles.button} title="Add to Cart" onPress={() => {}}/>
                        <Picker
                            selectedValue={this.state.language}
                            style={{height: 50, width: 100, marginLeft: 10, alignItems: 'center'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                        </Picker>
                    </View>
                    <View style={styles.smallSeperator}/>
                    <View style={styles.menuItem}>
                        <Text style={styles.foodName}>marinara</Text>
                        <Text style={styles.foodPrice}>$1.00</Text>
                        <Button style={styles.button} title="Add to Cart" onPress={() => {}}/>
                        <Picker
                            selectedValue={"1"}
                            style={{height: 50, width: 100, marginLeft: 10, alignItems: 'center'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="1" value="11" />
                            <Picker.Item label="2" value="22" />
                            <Picker.Item label="3" value="33" />
                            <Picker.Item label="4" value="44" />
                            <Picker.Item label="5" value="55" />
                            <Picker.Item label="6" value="66" />
                            <Picker.Item label="7" value="77" />
                            <Picker.Item label="8" value="88" />
                            <Picker.Item label="9" value="99" />
                        </Picker>
                    </View>
                    <View style={styles.smallSeperator}/>
                    <View style={styles.menuItem}>
                        <Text style={styles.foodName}>ranch</Text>
                        <Text style={styles.foodPrice}>$5.00</Text>
                        <Button style={styles.button} title="Add to Cart" onPress={() => {}}/>
                        <Picker
                            selectedValue={"1"}
                            style={{height: 50, width: 100, marginLeft: 10, alignItems: 'center'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="1" value="111" />
                            <Picker.Item label="2" value="222" />
                            <Picker.Item label="3" value="333" />
                            <Picker.Item label="4" value="444" />
                            <Picker.Item label="5" value="555" />
                            <Picker.Item label="6" value="666" />
                            <Picker.Item label="7" value="777" />
                            <Picker.Item label="8" value="888" />
                            <Picker.Item label="9" value="999" />
                        </Picker>
                    </View>
                    <View style={styles.smallSeperator}/>
                    <View style={styles.menuItem}>
                        <Text style={styles.foodName}>tobasco</Text>
                        <Text style={styles.foodPrice}>$9.99</Text>
                        <Button style={styles.button} title="Add to Cart" onPress={() => {}}/>
                        <Picker
                            selectedValue={"1"}
                            style={{height: 50, width: 100, marginLeft: 10, alignItems: 'center'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="1" value="1111" />
                            <Picker.Item label="2" value="2222" />
                            <Picker.Item label="3" value="34" />
                            <Picker.Item label="4" value="45" />
                            <Picker.Item label="5" value="56" />
                            <Picker.Item label="6" value="67" />
                            <Picker.Item label="7" value="78" />
                            <Picker.Item label="8" value="89" />
                            <Picker.Item label="9" value="90" />
                        </Picker>
                    </View>
                    <View style={styles.smallSeperator}/>
                    <View style={styles.menuItem}>
                        <Text style={styles.foodName}>BBQ</Text>
                        <Text style={styles.foodPrice}>$15.99</Text>
                        <Button style={styles.button} title="Add to Cart" onPress={() => {}}/>
                        <Picker
                            selectedValue={"1"}
                            style={{height: 50, width: 100, marginLeft: 10, alignItems: 'center'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="1" value="13" />
                            <Picker.Item label="2" value="24" />
                            <Picker.Item label="3" value="35" />
                            <Picker.Item label="4" value="46" />
                            <Picker.Item label="5" value="57" />
                            <Picker.Item label="6" value="68" />
                            <Picker.Item label="7" value="79" />
                            <Picker.Item label="8" value="80" />
                            <Picker.Item label="9" value="91" />
                        </Picker>
                    </View>
                    <View style={styles.smallSeperator}/>
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
        marginLeft: 5,
        fontSize: 15
    },
    foodPrice: {
        marginLeft: 100,
        fontSize: 15,
        marginRight: 10
    },
    restaurantTitle: {
        marginTop: 45,
        fontSize: 30
    },
    seperator: {
        alignSelf: 'center',
        height:5,
        width: "90%",
        backgroundColor: "#000"
    },
    smallSeperator: {
        alignSelf: 'center',
        height:2,
        width: "90%",
        backgroundColor: "#000",
    }
});
