import { useState } from "react";
import { Image, View, TextInput, SafeAreaView } from "react-native";
import { TextInputLoginInterface} from "../../interfaces/screens/LoginScreen.interface";
import { ButtonLogin } from "../../queries/Login.query";
import LoginStyle from "../../styles/Login.style";

const logo = require("../../../assets/vidat.png")
const Logo = () => (
    <Image style={LoginStyle.logo} source={logo} />
);

const emailPlaceholder =  "Email";
const passwordPlaceholder =  "Password";
const TextInputLogin = ({setEmail, setPassword }:TextInputLoginInterface) => (
    <View style={LoginStyle.textInputContainer}>
        <TextInput style={LoginStyle.textBox}
            placeholder={emailPlaceholder}
            onChangeText={setEmail}
        />
        <TextInput style={LoginStyle.textBox}
            placeholder={passwordPlaceholder}
            secureTextEntry
            onChangeText={setPassword}
        />
    </View>
);
const Space = () => <View style={LoginStyle.spaceStyle}/>
const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        <SafeAreaView style={LoginStyle.loginForm}>
            <Logo />
            <Space/>
            <TextInputLogin
                setEmail={setEmail}
                setPassword={setPassword}/>
            <></>
            <ButtonLogin 
                    email={email}
                    password={password}
                />
            <Space/>
        </SafeAreaView>

    );
};


export default LoginForm;