import React ,{Component} from 'react';
import {View , Text, TextInput , StyleSheet, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';

export default class StorageFacilitiesScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = 'Storage Facilities' navigation ={this.props.navigation}/>
            </View>
        )
    }
}