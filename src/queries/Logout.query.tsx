import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";

import { AuthContext } from "../context/Auth.context";
import { UserContext } from "../context/User.context";
import { ServiceContext } from "../context/Service.context";
import { ScheduleContext } from '../context/Schedule.context';
import { MsgContext } from "../context/Msg.context";


import RecoverStyle from "../styles/Recover.style";

const exitButtonText= "Cerrar sesión"
export const ButtonLogout = () => {

    const { authLogout } = useContext(AuthContext);
    const { userUpdate } = useContext(UserContext);
    const { updateClient } = useContext(ScheduleContext);
    const { result } = useContext(ServiceContext);
    const { showMsg} = useContext(MsgContext);

    const Logout = () => {
        authLogout();
        result([]);
        userUpdate("");
        updateClient([]);
        showMsg("Vuelva Pronto");
    }

    return(
        <TouchableOpacity
            style={RecoverStyle.recoverButtonStyle}
            onPress={Logout}
        >
            <Text style={RecoverStyle.recoverTextStyle}>
                {exitButtonText}
            </Text>
        </TouchableOpacity>
    )
};