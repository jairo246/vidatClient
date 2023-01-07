import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { urlCreateUser, RegisterQueryTypeInput } from "../interfaces/queries/RegisterQuery.interface";
import { CreateUserTypeInput, CreateUserTypeOutput } from "../interfaces/queries/RegisterQuery.interface";

import { MsgContext } from "../context/Msg.context";
import { RequestPostCreate } from "../requests/Clients.requests";
import RegisterStyle from "../styles/Register.style";

const registerButtonText = "Crear Cuenta";
export const ButtonRegister = (registerQuery:RegisterQueryTypeInput) => {

    const { errorCatch, showMsg} = useContext(MsgContext);

    const registerConclusion = (res:CreateUserTypeOutput) => {

        if(res.status == 201){

            showMsg(res.data.message);
            registerQuery.onLoginPress();
        }
        else{

            showMsg(res.data.error);
        }
    }
    const Register = (register:CreateUserTypeInput) => {

        fetch(urlCreateUser,RequestPostCreate(register))
        .then(res => res.json())
        .then(data => registerConclusion(data))
        .catch(error => errorCatch())
    }


    return(
        <TouchableOpacity
            style={RegisterStyle.registerButtonStyle}
            onPress={() => Register({
                    name: registerQuery.name,
                    rut: registerQuery.rut,
                    nationality: registerQuery.nationality,
                    birthday: registerQuery.birthday,
                    email: registerQuery.email,
                    phone: registerQuery.phone,
                    address: registerQuery.address,
                    password: registerQuery.password,
            })}
        >
            <Text style={RegisterStyle.registerTextStyle}>
                {registerButtonText}
            </Text>
        </TouchableOpacity>
    )
};