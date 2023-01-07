import React from "react";
import {ScrollView, SafeAreaView} from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootLoginStackParamList } from "../interfaces/navigators/paramList.interface";
import RegisterForm from "../components/Register/RegisterForm";
import RegisterStyle from "../styles/Register.style";

const RegisterScreen = ({ route, navigation }:NativeStackScreenProps<RootLoginStackParamList,"RegisterScreen">) => {
    return (
        <SafeAreaView style={RegisterStyle.screen}>
            <ScrollView>
                <RegisterForm onLoginPress={() => navigation.navigate("LoginScreen")}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default RegisterScreen;