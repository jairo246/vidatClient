import { useContext } from "react";
import { SafeAreaView, View, TouchableOpacity, Text} from "react-native";
import { SearchContext } from "../context/Search.context";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SearchStackParamList } from '../interfaces/navigators/paramList.interface';
import ConfirmForm from "../components/Confirm/ConfirmForm";
import { ButtonCreateContract } from "../queries/CreateContract.query";
import ConfirmStyle from "../styles/Confirm.style";

const ConfirmScreen  = ({ route, navigation }:NativeStackScreenProps<SearchStackParamList,"ConfirmScreen">) => {

    const {setCurrentPosition} = useContext(SearchContext)
    const { chosenDay } = route.params;
    const backButtonText = "Regresar";

    return (
        <SafeAreaView style={ConfirmStyle.Container}>
            <ConfirmForm />

            <View style={ConfirmStyle.buttonStyleContainer}>
                <TouchableOpacity
                        style={ConfirmStyle.processButtonTouch}
                    onPress={() => {
                            navigation.navigate("DailySearchScreen",{chosenDay: chosenDay})
                            setCurrentPosition(4)
                        }}
                >
                    <Text style={ConfirmStyle.processButtonText}>
                    {backButtonText}
                    </Text>
                </TouchableOpacity>

                <ButtonCreateContract onWallrPress={() => {
                    // @ts-ignore
                    navigation.navigate('WallStack',{screen:"WallScreen"})
                }}/>
            </View>     
        </SafeAreaView>
    );
}

export default ConfirmScreen;