import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SchedulingStackParamList } from '../interfaces/navigators/paramList.interface';
import Daily from '../components/Daily/DailyStruct';


const DailyScreen = ({ route, navigation }:NativeStackScreenProps<SchedulingStackParamList,"DailyScreen">) => {
  
  const dayWeek = ["Lunes","Martes","Miercóles","Jueves","Viernes","Sabado","Domingo"];
  const { chosenDay } = route.params;
  const hoy = new Date(chosenDay.dateString)
  //console.log(dayWeek[hoy.getDay()])

  

  return <Daily chosenDay={chosenDay}/>

}
export default DailyScreen;