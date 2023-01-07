import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootLoginStackParamList } from '../../interfaces/navigators/paramList.interface';
import LoginScreen from '../../screens/Login.screen';
import RegisterScreen from '../../screens/Register.screen';
import RecoverScreen from '../../screens/Recover.screen';

const Stack = createNativeStackNavigator<RootLoginStackParamList>();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}  />
        <Stack.Screen name="RecoverScreen" component={RecoverScreen}  />
    </Stack.Navigator>
  );
}

export default LoginStack;