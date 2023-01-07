import { useContext } from 'react';
import { View, Text, ScrollView } from "react-native";
import { ServiceContext } from '../../context/Service.context';
import InfoServiceStyle from '../../styles/InfoService.style';

const InfoServiceSchedule = () => {

  const { serviceInfo } = useContext(ServiceContext);

  return (
    <View style={InfoServiceStyle.InfoScheduleViewDays}>
      <ScrollView >
          {serviceInfo.daysJob.map((day:string,index:number) => (
                    <View key={index}
                        style={InfoServiceStyle.InfoViewDay}
                    >
                        <Text 
                        style={InfoServiceStyle.InfoTextDay}>
                            {day}
                        </Text>
                    </View>
            ))}
      </ScrollView>
    </View>
  );
  }

export default InfoServiceSchedule;