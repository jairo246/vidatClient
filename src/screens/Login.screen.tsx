import React from "react";
import { SafeAreaView } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootLoginStackParamList } from "../interfaces/navigators/paramList.interface";
import LoginForm from "../components/Login/LoginForm";
import StackNavigationButtons from "../components/Login/StackNavigationButtons";
import LoginStyle from "../styles/Login.style";

const LoginScreen = ({ route, navigation }:NativeStackScreenProps<RootLoginStackParamList,"LoginScreen">) => {
    return (
        <SafeAreaView style={LoginStyle.screen}>
            <LoginForm/>
            <StackNavigationButtons 
                onRecoverPress={() => navigation.navigate('RecoverScreen')}
                onRegisterPress={() => navigation.navigate('RegisterScreen')}/>
        </SafeAreaView>
    );
}

export default LoginScreen;