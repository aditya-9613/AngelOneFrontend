import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { DashboardScreenNavigationProp, RootStackParamsList } from '../components/types'
import { RouteProp } from '@react-navigation/core'
import CheckBox from '@react-native-community/checkbox'
import axios from 'axios'
import { Base_URL } from '../components/Base_URL'
import { SaveToken } from '../components/TokenHandlers.js'



type Props = {
  route: RouteProp<RootStackParamsList, 'Login'>
  navigation: DashboardScreenNavigationProp
}

const Login: React.FC<Props> = ({ navigation }) => {

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleLogin = () => {
    setLoading(true)
    axios({
      url: `${Base_URL}/api/v1/user/login`,
      method: 'POST',
      data: ({ mobile, password })
    }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        SaveToken('user',res.data.data)
        navigation.navigate('Dashboard')
      } else {
        Alert.alert('Server Error 900')
      }
    }).catch((err) => {
      setLoading(false);
      const message = err.message;
      const code = message.substring(message.length - 3);
      if (code === '400') {
        Alert.alert('Required Fields')
      } else if (code === 404) {
        Alert.alert('User Does Not Exists Please Sign In')
        navigation.navigate('Create_Account')
      } else if (code === 409) {
        Alert.alert('Invalid Credentials')
      } else {
        Alert.alert('Server Error 901')
      }
    })
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.BoxHeading}>
          <Text style={styles.heading}>Login</Text>
          <TextInput onChangeText={(text) => setMobile(text)} placeholderTextColor={"#000"} value={mobile} keyboardType="numeric" style={styles.InputBox} placeholder='Enter Mobile Number' />
          <TextInput onChangeText={(text) => setPassword(text)} placeholderTextColor={"#000"} value={password} secureTextEntry={!isChecked} style={styles.InputBox} placeholder='Enter Password' />
        </View>
        <View style={styles.ViewCheckBox}>
          <CheckBox
            value={isChecked}
            onValueChange={(() => setIsChecked(!isChecked))}
            onCheckColor='#000'
          />
          <Text style={styles.CheckBoxText}>Show Password</Text>
        </View>

        {
          loading ?
            <View style={{ marginTop: "5%" }}>
              <ActivityIndicator
                size={'large'}
                color={'#7615d1'}
              />
            </View> :
            <></>
        }
        <TouchableOpacity onPress={handleLogin} style={styles.Button}>
          <Text style={styles.ButtonText} >Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading: {
    color: "#000",
    fontSize: 25,
    fontWeight: "600",
    marginTop: "20%",
    textAlign: "center",
    marginBottom: "20%"
  },
  InputBox: {
    borderWidth: 2,
    borderColor: "#bdbdbd",
    width: "70%",
    borderRadius: 5,
    marginTop: "5%",
    marginBottom: "5%",
    color: "#000"
  },
  BoxHeading: {
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#7615d1",
    padding: 12,
    width: "20%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: "15%"
  },
  ButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600"
  },
  ViewCheckBox: {
    flex: 1,
    flexDirection: "row",
    width: "65%",
    marginTop: "7%",
    justifyContent: "center"
  },
  CheckBoxText: {
    color: "#000",
    fontSize: 17,

  }
});

export default Login