import { useEffect, useContext } from 'react';
import { View, TouchableOpacity, Text} from "react-native";
import { Calendar } from 'react-native-calendars';
import { AuthContext } from '../context/Auth.context';
import { ScheduleContext } from '../context/Schedule.context';
import { MsgContext } from '../context/Msg.context';

import { SearchContext } from "../context/Search.context";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SearchStackParamList } from '../interfaces/navigators/paramList.interface';

import { urlShowAppointments } from '../interfaces/requests/ShedulesRequests.interface';
import { RequestAppointmentsGetShow } from '../requests/Schedules.requests';
import ConfirmStyle from "../styles/Confirm.style";

const CalenderSearchScreen = ({ route, navigation }:NativeStackScreenProps<SearchStackParamList,"CalenderSearchScreen">) => {

  const { jwt } = useContext(AuthContext);
  const { updateClient } = useContext(ScheduleContext);
  const {setCurrentPosition} = useContext(SearchContext);
  const { errorCatch } = useContext(MsgContext);
  const backButtonText = "Regresar";
  
  useEffect(  () => {
    fetch(urlShowAppointments,RequestAppointmentsGetShow(jwt))
    .then(res => res.json())
    .then(data => updateClient(data.data))
    .catch(error => errorCatch())
},[]);

  return (
    <View>
      <Calendar
        markingType={'period'}
        onDayPress={day => {
                  navigation.navigate("DailySearchScreen",{chosenDay: day})
                  setCurrentPosition(5)
                }}
      />
      <TouchableOpacity
              style={ConfirmStyle.processButtonTouch}
          onPress={() => {
                  navigation.navigate('InfoServiceScreen')
                  setCurrentPosition(3)
              }}
      >
          <Text style={ConfirmStyle.processButtonText}>
          {backButtonText}
          </Text>
      </TouchableOpacity>
    </View>
  );
}
export default CalenderSearchScreen;