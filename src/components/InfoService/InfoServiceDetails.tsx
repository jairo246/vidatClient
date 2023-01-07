import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { InfoBlockDescriptionType, InfoBlockFreeType } from '../../interfaces/screens/InfoService.interface';

import { ServiceContext } from '../../context/Service.context';
import InfoServiceStyle from '../../styles/InfoService.style';

const InformationBlockDescription = ({data,title}:InfoBlockDescriptionType) => (

      <View style={InfoServiceStyle.InfoBlockView}>
        <View style={InfoServiceStyle.InfoView}>
            <View style={InfoServiceStyle.InfoViewTitle}>
                <Text style={InfoServiceStyle.InfoTextTitle}>
                    {title}
                </Text>
            </View>
        </View>
        <View style={InfoServiceStyle.InfoViewDataDescription}>
            <Text style={InfoServiceStyle.InfoTextDataDescription}>
                {data}
            </Text>
        </View>
      </View>
);

const InformationBlockFee = ({title, unitCost, currency,}:InfoBlockFreeType) => (

    <View style={InfoServiceStyle.InfoBlockView}>
      <View style={InfoServiceStyle.InfoView}>
            <View style={InfoServiceStyle.InfoViewTitle}>
                <Text style={InfoServiceStyle.InfoTextTitle}>
                    {title}
                </Text>
            </View>
      </View>
      <View style={InfoServiceStyle.InfoViewDataFree}>
          <Text style={InfoServiceStyle.InfoTextDataFree}>
                {`$${unitCost}`}
          </Text>
          <Text style={InfoServiceStyle.InfoTextDataFree}>
                {`/${currency}`}
          </Text>
      </View>
    </View>
);

const InfoServiceDetails = () => {

    const { serviceInfo } = useContext(ServiceContext);

    const descriptionTitle =  "Descripción";
    const feeTitle = "Honorarios CLP";

    return(
      <View style={InfoServiceStyle.InfoDetails}>
        <View style={InfoServiceStyle.InfoBlock}>
          <InformationBlockDescription
              title={descriptionTitle}
              data={serviceInfo.description}
          />
          <InformationBlockFee
              title={feeTitle}
              currency={serviceInfo.currency}
              unitCost={serviceInfo.unitCost}
          />
        </View>
        <View style={InfoServiceStyle.InfoSpecialtyBlock}>
            <View style={InfoServiceStyle.Space}/>
        </View>
      </View>
    
  );
}
export default InfoServiceDetails;