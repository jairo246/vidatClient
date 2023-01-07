import { useEffect, useContext, useState, useCallback } from 'react';
import { ScrollView, RefreshControl, View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/Auth.context';
import { ScheduleContext } from '../context/Schedule.context';
import { MsgContext } from '../context/Msg.context';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { WallStackParamList } from '../interfaces/navigators/paramList.interface';
import { urlShowAppointments } from '../interfaces/requests/ShedulesRequests.interface';
import { ScheduleItem } from '../interfaces/contexts/ScheduleContext.interface';

import Appointment from '../components/Wall/Appointment';
import { RequestAppointmentsGetShow } from '../requests/Schedules.requests'
import WallStyle from '../styles/Wall.style';

const WallScreen = ({ route, navigation }:NativeStackScreenProps<WallStackParamList,"WallScreen">) => {

  const { jwt } = useContext(AuthContext);
  const textButton = "Crear un agendamiento";
  const { errorCatch } = useContext(MsgContext);
  const { schedulesClient, updateClient} = useContext(ScheduleContext);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  
  useEffect(  () => {
      fetch(urlShowAppointments,RequestAppointmentsGetShow(jwt))
      .then(res => res.json())
      .then(data => updateClient(data.data))
      .catch(error => errorCatch())
  },[]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetch(urlShowAppointments,RequestAppointmentsGetShow(jwt))
      .then(res => res.json())
      .then(data => {
          updateClient(data.data)
          setRefreshing(false)})
      .catch(error => {
        errorCatch()
          setRefreshing(false)})
  }, []);

  if(schedulesClient.length != 0 ){

      return (
        <ScrollView style={WallStyle.Screen}
            refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />}>
            {schedulesClient.map((scheduleItem:ScheduleItem) => {
                return(
                  <Appointment
                    key={scheduleItem.contractId}
                    scheduleItem={scheduleItem}
                    onDatePress={ () => { }}
                  />
                );
            })}
        </ScrollView>
      );
  }
  else{
    return(
      <View style={WallStyle.Empty}>
          <TouchableOpacity 
              style={WallStyle.TouchEmpty}
              onPress={() => {
                // @ts-ignore
                navigation.navigate('SearchStack',{screen:"CategorySearchScreen"})
              }}>
              <Text style={WallStyle.TextEmpty}>
                  {textButton}
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
export default WallScreen;