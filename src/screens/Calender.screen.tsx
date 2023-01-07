import { useEffect, useContext } from 'react';
import { Calendar } from 'react-native-calendars';
import { AuthContext } from '../context/Auth.context';
import { ScheduleContext } from '../context/Schedule.context';
import { MsgContext } from '../context/Msg.context';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SchedulingStackParamList } from '../interfaces/navigators/paramList.interface';
import {LocaleConfig} from 'react-native-calendars';
import { ButtonLogout } from '../queries/Logout.query';

import { urlShowAppointments } from '../interfaces/requests/ShedulesRequests.interface';
import { RequestAppointmentsGetShow } from '../requests/Schedules.requests';

LocaleConfig.locales['Es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiempre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ene.', 'Febr.', 'Marzo', 'Abr', 'May', 'Juni', 'Juli.', 'Agos', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mier.', 'Juev.', 'Vier.', 'Sab.'],
  today: "Hoy"
};
LocaleConfig.defaultLocale = 'Es';

const CalenderScreen = ({ route, navigation }:NativeStackScreenProps<SchedulingStackParamList,"CalenderScreen">) => {

  const { jwt } = useContext(AuthContext);
  const { updateClient} = useContext(ScheduleContext);
  const { errorCatch } = useContext(MsgContext);
  
  useEffect(  () => {
      fetch(urlShowAppointments,RequestAppointmentsGetShow(jwt))
      .then(res => res.json())
      .then(data => updateClient(data.data))
      .catch(error => errorCatch())
  },[]);

  return (
    <>
    <Calendar
      markingType={'period'}
      onDayPress={day => {navigation.navigate("DailyScreen",{chosenDay: day})}}
    />
    <ButtonLogout/>

    </>
  );
}
export default CalenderScreen;