import { useContext } from "react";
import jwt_decode from "jwt-decode";
import { TouchableOpacity, Text } from "react-native";
import { LoginUserTypeInput, LoginUserTypeOutput, urlUserLogin} from "../interfaces/queries/LoginQuery.interface";

import { AuthContext } from "../context/Auth.context";
import { MsgContext } from "../context/Msg.context";
import { UserContext } from "../context/User.context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetProviderTypeOutput  } from "../interfaces/contexts/AuthContext.interface";
import { RequestPostLogin } from "../requests/Clients.requests";
import LoginStyle from "../styles/Login.style";

const loginButtonText = "Iniciar Sesión";
export const ButtonLogin = (login:LoginUserTypeInput) => {

    const { authLogin } = useContext(AuthContext);
    const { userUpdate } = useContext(UserContext);
    const { errorCatch, showMsg} = useContext(MsgContext);

    const loginConclusion = async (res:LoginUserTypeOutput) => {
        if(res.status == 200){

            try{
                
                await AsyncStorage.setItem('@Email', JSON.stringify(jwt_decode<GetProviderTypeOutput>(res.data.token).email));
                await AsyncStorage.setItem('@Password', JSON.stringify(jwt_decode<GetProviderTypeOutput>(res.data.token).password));

                authLogin(res.data.token);
                userUpdate(res.data.token);
                showMsg(res.data.message);
                
            }
            catch{
                console.log("error")
            }
        }
        else{
            showMsg(res.data.error);
        }
    }

    const Login = (login:LoginUserTypeInput) => {
    
        fetch(urlUserLogin,RequestPostLogin(login))
        .then(res => res.json())
        .then(data => loginConclusion(data))
        .catch(error => errorCatch())
}
    return(
        <TouchableOpacity
            style={LoginStyle.loginButtonStyle}
            onPress={() => Login({
                email: login.email,
                password: login.password
            })}
        >
            <Text style={LoginStyle.loginTextStyle}>
                {loginButtonText}
            </Text>
        </TouchableOpacity>
    )
};