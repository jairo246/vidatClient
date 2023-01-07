import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { WallStackParamList } from '../../interfaces/navigators/paramList.interface';
import WallScreen from '../../screens/Wall.screen';
import PayScreen from '../../screens/Pay.screen';
import DateScreen from '../../screens/Date.screen';


const Stack = createNativeStackNavigator<WallStackParamList>();

const WallStack = () => {

  return (
    <Stack.Navigator initialRouteName="WallScreen">
    <Stack.Screen name="WallScreen" component={WallScreen} options={{ title:"Muro"}}/>
    <Stack.Screen name="DateScreen" component={DateScreen}  />
    <Stack.Screen name="PayScreen" component={PayScreen}/>
  </Stack.Navigator>
  );
}

export default WallStack;