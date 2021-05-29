import React ,{Component} from 'react';
import {View , Text, TextInput , StyleSheet, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import MyHeader from '../Components/MyHeader'
export default class HomeScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = 'HomeScreen' navigation ={this.props.navigation}/>
            </View>
            
        )
    }
}
