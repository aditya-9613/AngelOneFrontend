import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { GetToken } from '../components/TokenHandlers.js'


type Props={

}

const HomeScreen :React.FC<Props> = () => {

  const token  = GetToken('user');

  return (
    <View style={styles.Background}>
      <View style={styles.navbar}>
        <View style={{flex:1,flexDirection:"row"}}>
          <Text style={styles.navbarText}>Home</Text>
          <Text style={styles.navbarText}>News</Text>
        </View>
        <View style={{flex:1,flexDirection:"row"}}>
          <View></View>        
          <View></View>        
          <View></View>        
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Background:{
    backgroundColor:"#f0f2f7",
    height:"100%"
  },
  navbar:{
    backgroundColor:"#fff",
    flex:1,
    flexDirection:"column",
    marginTop:"5%",
    padding:"2%"
  },
  navbarText:{
    color:"#000",
    marginRight:'2%',
    fontSize:20
  }

});

export default HomeScreen;