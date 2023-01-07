import { useState } from 'react';
import {SafeAreaView, TextInput, View, Text} from "react-native";

import { TextInputRecoverInterface, ButtonRecoverInterface } from "../../interfaces/screens/RecoverScreen.interface";
import { ButtonRecover } from '../../queries/Recover.query';
import RecoverStyle from "../../styles/Recover.style";

const recoverTitle = "Recuperar Contraseña"
const recoverSubtitle = "Ingrese datos"
const emailPlaceHolder = "Correo electrónico"
const passwordPlaceHolder = "Contraseña"
const TextInputRecover = ({setEmail, setPassword}:TextInputRecoverInterface) => (
    <View style={RecoverStyle.textInputContainer}>
        <Text style={RecoverStyle.title}> {recoverTitle} </Text>
        <Text style={RecoverStyle.subtitle}> {recoverSubtitle} </Text>
        <TextInput style={RecoverStyle.textBox}
                   placeholder={emailPlaceHolder}
                   onChangeText={setEmail}
        />
        <TextInput style={RecoverStyle.textBox}
                   placeholder={passwordPlaceHolder}
                   secureTextEntry
                   onChangeText={setPassword}
        />
    </View>
);

const Space = () => <View style={RecoverStyle.spaceStyle}/>
const RecoverForm = ({onLoginPress}:ButtonRecoverInterface) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        <SafeAreaView style={RecoverStyle.recoverForm}>
            <TextInputRecover
                setEmail={setEmail}
                setPassword={setPassword}
            />
            <></>
            <ButtonRecover 
                email={email}
                password={password}
                onLoginPress={onLoginPress}
            />
            <Space/>
        </SafeAreaView>
    )
}

export default RecoverForm;