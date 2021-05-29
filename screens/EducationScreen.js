import React ,{Component} from 'react';
import {View , Text, TextInput , StyleSheet, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';

export default class EducationScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = 'Farming Education' navigation ={this.props.navigation}/>
            </View>
        )
    }
}