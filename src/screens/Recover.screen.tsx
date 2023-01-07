import React from "react";
import { ScrollView, SafeAreaView} from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootLoginStackParamList } from "../interfaces/navigators/paramList.interface";
import RecoverForm from "../components/Recover/RecoverForm";
import RecoverStyle from "../styles/Recover.style";

const RecoverScreen = ({ route, navigation }:NativeStackScreenProps<RootLoginStackParamList,"RecoverScreen">) => {
    return (
        <SafeAreaView style={RecoverStyle.screen}>
            <ScrollView>
                <RecoverForm onLoginPress={() => navigation.navigate("RecoverScreen")}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default RecoverScreen;