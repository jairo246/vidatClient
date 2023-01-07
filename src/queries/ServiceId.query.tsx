import { useContext } from "react";
import { Text, TouchableOpacity } from 'react-native';

import { AuthContext } from "../context/Auth.context";
import { SearchContext } from "../context/Search.context";
import { ServiceContext } from "../context/Service.context";
import { MsgContext } from "../context/Msg.context";

import { urlService } from "../interfaces/queries/ServiceIdQuery.interface";
import { ButtonServiceIdType } from "../interfaces/queries/ServiceIdQuery.interface";

import { RequestGetShowId } from '../requests/Services.requuest';
import ResultServiceStyle from '../styles/ResultService.style';

const ButtonServiceId = ({serviceId, onInfoServicePress}:ButtonServiceIdType) => {

    const { jwt } = useContext(AuthContext);
    const { showService } = useContext(ServiceContext);
    const { setCurrentPosition } = useContext(SearchContext)
    const { errorCatch } = useContext(MsgContext)

    const ServiceId = () => {

      setCurrentPosition(3)
      onInfoServicePress()
      fetch(urlService(serviceId),RequestGetShowId(jwt))
          .then(res => res.json())
          .then(data => showService(data.data))
          .catch(error => errorCatch())
  }
    
  return (
      <TouchableOpacity onPress={ServiceId}
            style={ResultServiceStyle.ResultItemTouchInfo}
        >
          <Text style={ResultServiceStyle.ResultItemTextInfo}>
              Siguiente
          </Text>
      </TouchableOpacity>
  );
}

export default ButtonServiceId