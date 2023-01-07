import {Text, SafeAreaView, TouchableOpacity} from "react-native";
import {ButtonRecoverInterface, ButtonRegisterInterface, NavigationButtons} from "../../interfaces/screens/LoginScreen.interface";
import LoginStyle from "../../styles/Login.style";

const recoverButtonText = "Olvidé mi contraseña";
const ButtonRecover = ({onRecoverPress}:ButtonRecoverInterface) => (
    <TouchableOpacity
        style={LoginStyle.recoverButtonStyle}
        onPress={onRecoverPress}
    >
        <Text style={LoginStyle.recoverTextStyle}>
            {recoverButtonText}
        </Text>
    </TouchableOpacity>
);

const registerButtonText = "Crear una cuenta";
const ButtonRegister = ({onRegisterPress}:ButtonRegisterInterface) => (
    <TouchableOpacity
        style={LoginStyle.registerButtonStyle}
        onPress={onRegisterPress}
    >
        <Text style={LoginStyle.registerTextStyle}>
            {registerButtonText}
        </Text>
    </TouchableOpacity>
);

const StackNavigationButtons = ({ 
    onRecoverPress,
    onRegisterPress
    }:NavigationButtons) => {
    return(
        <SafeAreaView style={LoginStyle.stackNavigationButtons}>
            <ButtonRecover onRecoverPress={onRecoverPress} />
            <ButtonRegister onRegisterPress={onRegisterPress} />
        </SafeAreaView>

    );
};

export default StackNavigationButtons;