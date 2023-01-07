import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalenderScreen from '../../screens/Calender.screen';
import DailyScreen from '../../screens/Daily.screen';
import type { SchedulingStackParamList } from '../../interfaces/navigators/paramList.interface';

const Stack = createNativeStackNavigator<SchedulingStackParamList>();

const SchedulingStack = () => {

  return (
    <Stack.Navigator initialRouteName="CalenderScreen">
    <Stack.Screen name="CalenderScreen" component={CalenderScreen}/>
    <Stack.Screen name="DailyScreen" component={DailyScreen}/>
  </Stack.Navigator>
  );
}

export default SchedulingStack;