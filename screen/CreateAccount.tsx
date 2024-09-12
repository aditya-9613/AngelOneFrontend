import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/core';
import { LoginScreenNavigationProp, RootStackParamsList } from '../components/types';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { Base_URL } from '../components/Base_URL';


type Props = {
    route: RouteProp<RootStackParamsList, 'Create_Account'>
    navigation: LoginScreenNavigationProp
}

const CreateAccount: React.FC<Props> = ({ navigation }) => {

    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isChecked, setIsChecked] = useState(false);
    const handleSignIn = () => {
        axios({
            method: 'POST',
            url: `${Base_URL}/api/v1/user/register`,
            data: ({ name, mobile, password, confirmPassword })
        }).then((res) => {
            if (res.status === 200) {
                Alert.alert("User Registered Successfully")
                navigation.navigate('Login');
            } else {
                Alert.alert("Server Error 900")
            }

        }).catch((err) => {
            const message = err.message;
            const code = message.substring(message.length - 3);
            if (code === 400) {
                Alert.alert('Required Fields')
            } else if (code === 401) {
                Alert.alert('Password Not Same')
            } else if (code === 409) {
                Alert.alert('User Already Exists')
            } else {
                Alert.alert('Server Error 901')
            }
        })
    }
    return (
        <ScrollView>
            <View>
                <View style={styles.ContentBox}>
                    <Text style={styles.Heading}>Create Account</Text>
                    <TextInput onChangeText={(text) => setName(text)} value={name} style={styles.TextInput} keyboardType="default" placeholder='Enter Name' />
                    <TextInput onChangeText={(text) => setMobile(text)} value={mobile} style={styles.TextInput} keyboardType="numeric" placeholder='Enter Mobile Number' />
                    <TextInput onChangeText={(text) => setPassword(text)} value={password} style={styles.TextInput} secureTextEntry={!isChecked} placeholder='Enter Password' />
                    <TextInput onChangeText={(text) => setConfirmPassword(text)} value={confirmPassword} style={styles.TextInput} secureTextEntry={!isChecked} placeholder='Enter Confirm Password' />
                </View>
                <View style={styles.ViewCheckBox}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={(() => setIsChecked(!isChecked))}
                    />
                    <Text style={styles.CheckBoxText} >Show Password</Text>
                </View>
                <TouchableOpacity onPress={handleSignIn} style={styles.Button}>
                    <Text style={styles.ButtonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Heading: {
        textAlign: "center",
        fontSize: 25,
        marginTop: "15%",
        color: "#000",
        fontWeight: "800",
    },
    ContentBox: {
        alignItems: "center"
    },
    TextInput: {
        borderWidth: 2,
        borderColor: "#bdbdbd",
        width: "70%",
        marginTop: "15%",

    },
    Button: {
        backgroundColor: "#7615d1",
        width: "30%",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: "15%"
    },
    ButtonText: {
        color: "#fff",
        fontWeight: "600"
    },
    CheckBoxText: {
        color: "#000",
        fontSize: 17,
    },
    ViewCheckBox: {
        flex: 1,
        flexDirection: "row",
        width: "65%",
        marginTop: "7%",
        justifyContent: "center"
    }
});

export default CreateAccount;