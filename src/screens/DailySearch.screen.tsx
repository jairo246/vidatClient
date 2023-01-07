import { useContext } from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { SearchContext } from "../context/Search.context";

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SearchStackParamList } from '../interfaces/navigators/paramList.interface';
import DailySearch from '../components/DailySearch/DailySearchStruct';
import { DailySearchStyle } from "../styles/DailySearch.style";


const DailySearchScreen = ({ route, navigation }:NativeStackScreenProps<SearchStackParamList,"DailySearchScreen">) => {
  
  const dayWeek = ["Lunes","Martes","Miercóles","Jueves","Viernes","Sabado","Domingo"];
  const { chosenDay } = route.params;
  const hoy = new Date(chosenDay.dateString)
  //console.log(dayWeek[hoy.getDay()])

  const {setCurrentPosition} = useContext(SearchContext)
  const backButtonText = "Regresar";

  return (
        <View style={DailySearchStyle.screen}>
          <View style={DailySearchStyle.head}>
            <TouchableOpacity
                style={DailySearchStyle.processButtonTouch}
                onPress={() => {
                        navigation.navigate('CalenderSearchScreen')
                        setCurrentPosition(4)
                    }}
                >
                <Text style={DailySearchStyle.processButtonText}>
                {backButtonText}
                </Text>
            </TouchableOpacity>
          </View>
          <View style={DailySearchStyle.diary}>
            <DailySearch chosenDay={chosenDay} onConfirmhPress={ () => navigation.navigate('ConfirmScreen',{chosenDay:chosenDay})} />
          </View>
        </View>
        );

}
export default DailySearchScreen;