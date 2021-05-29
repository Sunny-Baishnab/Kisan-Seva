import React ,{Component} from 'react';
import {Image} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import {AppDrawerNavigator} from './Components/AppDrawerNavigator'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends Component{
  render(){
    return(
      <SafeAreaProvider>
        <AppContainer/>
      </SafeAreaProvider>
    )
  }
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(switchNavigator)

