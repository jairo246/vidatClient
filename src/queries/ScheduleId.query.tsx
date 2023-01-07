import { useContext } from "react";
import { Text, TouchableOpacity } from 'react-native';

import { AuthContext } from "../context/Auth.context";
import { SearchContext } from "../context/Search.context";
import { ServiceContext } from "../context/Service.context";
import { ScheduleContext } from "../context/Schedule.context";
import { MsgContext } from "../context/Msg.context";

import { urlSChedule } from "../interfaces/queries/ScheduleIdQuery.interface";
import { ButtonSchechuleIdType } from "../interfaces/queries/ScheduleIdQuery.interface";

import { RequestGetShowId } from "../requests/Schedules.requests";
import InfoServiceStyle from "../styles/InfoService.style";

const ButtonScheduleId = ({ onCalenderSearchPress}:ButtonSchechuleIdType) => {

    const { jwt } = useContext(AuthContext);
    const { updateProvider, setInfoSchedule } = useContext(ScheduleContext);
    const { serviceInfo } = useContext(ServiceContext);
    const { setCurrentPosition } = useContext(SearchContext);
    const { errorCatch } = useContext(MsgContext);
    const nextButtonText = "Horarios";

    const ScheduleId = () => {

      setCurrentPosition(4)
      setInfoSchedule(serviceInfo);
      onCalenderSearchPress()
      fetch(urlSChedule(serviceInfo.providerId),RequestGetShowId(jwt))
          .then(res => res.json())
          .then(data => updateProvider(data.data))
          .catch(error => errorCatch())
  }
    
  return (
      <TouchableOpacity onPress={ScheduleId}
            style={InfoServiceStyle.processButtonTouch}
        >
          <Text style={InfoServiceStyle.processButtonText}>
              {nextButtonText}
          </Text>
      </TouchableOpacity>
  );
}
export default ButtonScheduleId