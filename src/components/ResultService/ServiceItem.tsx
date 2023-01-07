import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ServiceItemType } from '../../interfaces/screens/ResultService.interface';

import ButtonServiceId from '../../queries/ServiceId.query';
import ImagesCarousel from './ImagesCarousel';
import ResultServiceStyle from '../../styles/ResultService.style';

const ServiceItem = ({
          serviceId,
          title,
          images,
          secondaryText,
          onInfoServicePress}:ServiceItemType) =>{
          
  const [position,setPosition] = useState<number>(0);
            
  return(
    <View style={ResultServiceStyle.ResultItem}>
      <View style={ResultServiceStyle.ResultItemFirst}>
        <View style={ResultServiceStyle.ResultItemViewTitle}>
            <Text style={ResultServiceStyle.ResultItemTextTitle}>
                {title}
            </Text>
        </View>
        <ButtonServiceId serviceId={serviceId} onInfoServicePress={onInfoServicePress}/>
      </View>
      <View style={ResultServiceStyle.ResultItemImages}>
        <ImagesCarousel
            images={images}
            position={position}
            setPosition={setPosition}
        />
      </View>
      <View style={ResultServiceStyle.ResultItemEnd}>
        <View style={ResultServiceStyle.ResultItemViewDescription}>
            <Text style={ResultServiceStyle.ResultItemTextDescription}>
              {secondaryText}
            </Text>
        </View>
      </View>
    </View>       
  );
};
export default ServiceItem;