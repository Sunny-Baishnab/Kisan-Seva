import React ,{Component} from 'react';
import {Text,View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen'
import EquipmentScreen from '../screens/EquipmentScreen'
import EducationScreen from '../screens/EducationScreen'
import InterestLoanScreen from '../screens/InterestLoan'
import News from '../screens/NewsScreen'
import StorageFacilitiesScreen from '../screens/StorageFacilities'
import TransportationServiceScreen from '../screens/TransportationService'
import CustomSideBarMenu from './CustomSideBarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    HomeScreen:{
        screen:HomeScreen
    },
    ModernEquipment:{
        screen:EquipmentScreen
    },
    FarmingEducation:{
        screen:EducationScreen
    },
    InterestLoan:{
        screen:InterestLoanScreen
    },
    News:{
        screen:News
    },
    StorageFacilities:{
        screen:StorageFacilitiesScreen
    },
    TransportationService:{
        screen:TransportationServiceScreen
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'HomeScreen'

})