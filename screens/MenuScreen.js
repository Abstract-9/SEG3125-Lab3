import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, Picker, TouchableHighlight, Image} from 'react-native';

export default class indexScreen extends Component {

    render(){

        return(
            <View style={styles.container}>
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

                <Text style={styles.title}>Saucify</Text>
                <Text style={styles.resturantTitle}>mcd</Text>

                <View style={styles.menuContainer}>
                    <View style={styles.menuItem}>
                        <Text style={styles.foodName}>ymu</Text>
                        <Text style={styles.foodPrice}>10.99</Text>
                        <Button style={styles.addButton}
                                title="Add to cart"
                                onPress={() => {}}/>
                        <Picker
                          selectedValue="1"
                          style={styles.picker}>
                          <Picker.Item label="1" value={1}/>
                          <Picker.Item label="2" value={2}/>
                          <Picker.Item label="3" value={3}/>
                          <Picker.Item label="4" value={4}/>
                          <Picker.Item label="5" value={5}/>
                          <Picker.Item label="6" value={6}/>
                          <Picker.Item label="7" value={7}/>
                          <Picker.Item label="8" value={8}/>
                          <Picker.Item label="9" value={9}/>
                        </Picker>

                    </View>
                </View>

            </View>
        )
    }

    // getData = async(key) => {
    //     try{
    //         return await AsyncStorage.getItem(key);
    //     } catch(e){
    //
    //     }
    // }
}

const styles = StyleSheet.create({
    menuButton:{
        textAlign:'left',
        width: 60,
        height: 60,
    },
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: 30,
    },
    menuContainer: {
        flex:1,
        alignItems: "flex-start"
    },
    menuItem: {
        flex:1,
        flexDirection:"row",
        alignItems:"flex-start",
        marginTop: 40
    },
    foodName: {
      fontSize: 25,
      marginEnd: 40
    },
    addButton: {
        marginEnd: 5
    },
    foodPrice: {
        fontSize: 25,
        marginEnd: 5
    },
    picker: {
        marginEnd: 5
    }


});