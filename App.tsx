import React from "react";
import {
  SafeAreaView,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignupScreen from "./screen/SignupScreen";
import CreateAccount from "./screen/CreateAccount";
import { RootStackParamsList } from "./components/types";
import Login from "./screen/Login";
import SplashScreen from "./screen/SplashScreen";
import HomeScreen from "./screen/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamsList>();

function App () {
  return (   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Home" component={SignupScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Create_Account" component={CreateAccount} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Dashboard" component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;