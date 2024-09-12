import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateAccountScreenNavigationProp } from '../components/types';

type Props={
  navigation:CreateAccountScreenNavigationProp
}
const {height}=Dimensions.get('screen');
const SignupScreen : React.FC<Props> = ({navigation}) => {

   

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Image}>
          <Image source={require('../assets/Images/logo1.png')} />
          <Text style={styles.LogoText} >Angel One D</Text>
        </View>
        <View style={styles.headBox}>
          <TouchableOpacity style={styles.container}>
            <Text style={styles.Button} onPress={()=>navigation.navigate('Create_Account')}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <Text style={styles.Button} onPress={()=>navigation.navigate('Login')}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headBox: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "relative",
    marginTop: height*0.5,
    
  },
  container: {
    backgroundColor: "#7615d1",
    width: "30%",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },
  Button: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  Image:{
    alignItems:"center",
  },
  LogoText:{
    fontSize:20,
    fontWeight:"800",
    color:"#000"
  }
})

export default SignupScreen