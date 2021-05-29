import React ,{Component} from 'react';
import {View , Text, TextInput , StyleSheet, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';

export default class EquipmentScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = 'Equipment Details' navigation ={this.props.navigation}/>
            </View>
        )
    }
}