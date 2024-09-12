import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import {  HomeScreenNavigationProp} from '../components/types'

type Props = {
  navigation : HomeScreenNavigationProp
}

const SplashScreen:React.FC<Props> = ({navigation}) => {

  function goToHome() {
    navigation.navigate('Home');
  }

  setTimeout(goToHome,2000);

  return (
    <View>
      <Image style={styles.Images} resizeMode='cover' source={require('../assets/Images/splash_screen.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  Images:{
    width:"100%",
    height:"100%"
  }

});

export default SplashScreen;