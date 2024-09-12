import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamsList={
    Home:undefined,
    Create_Account:undefined,
    Login:undefined,
    Splash:undefined,
    Dashboard:undefined
}

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>;
export type CreateAccountScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Create_Account'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Login'>
export type SplashScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Splash'>
export type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Dashboard'>