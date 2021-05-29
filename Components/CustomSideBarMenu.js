import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import {Avatar} from 'react-native-elements';
import {DrawerItems} from 'react-navigation-drawer';
import * as ImagePicker from 'expo-image-picker';
import db from '../config';

export default class CustomSideBarMenu extends Component{
    constructor(){
        super()
        this.state={
            image:'#',
            userId:firebase.auth().currentUser.email,
            docId:'',
            name:''
        }
    }
    fetchImage=(imageName)=>{
        var storageref = firebase.storage().ref().child('user_profiles/'+imageName)
        storageref.getDownloadURL()
        .then((url)=>{
            this.setState({
                image:url
            })
        })
        .catch((error)=>{
            this.setState({
                image:'#'
            })
        })
    }
    uploadImage=async(uri,imageName)=>{
        var response = await fetch(uri)
        var blob = await response.blob()
        var ref = firebase.storage().ref().child('user_profiles/'+imageName)
        return ref.put(blob).then((response)=>{
            this.fetchImage(imageName)
        })
    }
    selectPicture = async()=>{
        const {cancled,uri}= await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[1,1],
            quality:1
        })
        if(!cancled){
            this.uploadImage(uri,this.state.userId)
        }
    }
    getUserProfile(){
        db.collection('users').where('email_id','==',this.state.userId)
        .onSnapshot((snapShot)=>{
            snapShot.forEach((doc)=>{
                this.setState({
                    name:doc.data().first_name+' '+doc.data().last_name,
                    docId:doc.id,
                    image:doc.data().image
                })
            })
        })
    }
    componentDidMount(){
        this.getUserProfile()
        this.fetchImage(this.state.userId)
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {{flex:1,alignItems:'center',backgroundColor:"lightgreen"}}>
                    <Avatar rounded
                    source = {{uri:this.state.image}}
                    size  = 'medium'
                    onPress = {()=>{
                        this.selectPicture()
                    }}
                    containerStyle = {styles.container}
                    showEditButton/>
                    <Text style = {styles.text}>{this.state.name}</Text>
                </View>
                <View style = {{flex:0.8}}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style =  {{flex:2,paddingBottom:30,justifyContent:'center'}}>
                    <TouchableOpacity style = {{height:50,width:'80%',borderRadius:10,backgroundColor:'lightgreen',alignItems:'center',justifyContent:'center'}}
                    onPress={()=>{
                        firebase.auth().signOut()
                        this.props.navigation.navigate('WelcomeScreen')
                    }}>
                        <Text style = {{fontSize:20,fontWeight:'bold'}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:0.75,
        width:'40%',
        height:'20%',
        marginLeft:20,
        marginTop:30,
        borderRadius:30
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        color:'black'
    }
})