import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { RecoverQueryTypeInput, RecoverUserTypeInput, RecoverUserTypeOutput, urlRecoverUser } from "../interfaces/queries/RecoverQuery.interface";

import { MsgContext } from "../context/Msg.context";
import { RequestPutRecover } from "../requests/Clients.requests";
import RecoverStyle from "../styles/Recover.style";

const recoverButtonText = "Solicitar Recuperación";
export const ButtonRecover = (recoverQuery:RecoverQueryTypeInput) => {

    const { errorCatch, showMsg} = useContext(MsgContext);

    const recoverConclusion = (res:RecoverUserTypeOutput) => {

        if(res.statusCode == 201){
            showMsg(res.message);
            recoverQuery.onLoginPress();
        }
        else{
            showMsg(res.message);
        }
      }
      const Recover = (recover:RecoverUserTypeInput) => {
  
        fetch(urlRecoverUser,RequestPutRecover(recover))
        .then(res => res.json())
        .then(data => recoverConclusion(data))
        .catch(error => errorCatch())
      }
    
    return(
        <TouchableOpacity
            style={RecoverStyle.recoverButtonStyle}
            onPress={() => Recover({
                email: recoverQuery.email,
                password: recoverQuery.password
            })}
        >
            <Text style={RecoverStyle.recoverTextStyle}>
                {recoverButtonText}
            </Text>
        </TouchableOpacity>
    )
};