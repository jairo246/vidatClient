import { useContext } from 'react';
import { View, Image, Text } from "react-native";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Avatar } from 'react-native-paper';
import { providersPhoto, servicePhoto } from "../../constants/linkPhoto";

import { ServiceContext } from '../../context/Service.context';
import InfoServiceStyle from "../../styles/InfoService.style";

const empty = require("../../../assets/empty.png")
const iconSpe = require("../../../assets/iconSpe.png")

const InfoServicePhoto = () => {

  const { serviceInfo } = useContext(ServiceContext);
  
  return(

  <View style={InfoServiceStyle.InfoPhotoComponent}>
      {serviceInfo.photo != "" ?
      <Image style={InfoServiceStyle.photo}
      source={{ uri: servicePhoto + serviceInfo.photo }}/>
      :
      <Image style={InfoServiceStyle.photo}
      source={ empty }/>
      }
  </View>
)}
const InfoServiceUser = () => {

  const { serviceInfo } = useContext(ServiceContext);

  return(
    <View style={InfoServiceStyle.InfoUserComponent}>
        <View style={InfoServiceStyle.InfoAvatarUser}>
          <View style={InfoServiceStyle.Avatar}>
              <View style={InfoServiceStyle.InfoBackgroundColor}>
                {serviceInfo.provider.phone != undefined ? 
                    <Avatar.Image size={110} source={{uri: providersPhoto + serviceInfo.provider.properties.photo}} />
                    : 
                    <Avatar.Icon  size={110} icon="folder" />
                }
              </View>
              <View style={InfoServiceStyle.InfoAvatar}>
                  <Text style={InfoServiceStyle.InfoAvatarProfession} >{serviceInfo.title}</Text>
                  
                  <Text style={InfoServiceStyle.InfoAvatarName} >
                    {serviceInfo.provider.name != undefined ? serviceInfo.provider.name :  "------"}
                  </Text>
              </View>
          </View>
        </View>
        <View style={InfoServiceStyle.InfoDataUser}>
              <View style={InfoServiceStyle.InfoDataGeneral}>
                  <FontAwesome name="university" size={24} color="gray" />
                  <Text style={InfoServiceStyle.InfoTextGeneral} >
                    {serviceInfo.provider.properties.profession != undefined ? serviceInfo.provider.properties.profession :  "------"}
                  </Text>
              </View>
              <View style={InfoServiceStyle.InfoDataGeneral}>
                  <Entypo name="graduation-cap" size={25} color="gray" />
                  <Text style={InfoServiceStyle.InfoTextGeneral} >
                        {serviceInfo.provider.properties.position != undefined ? serviceInfo.provider.properties.position :  "------"}
                  </Text>
              </View>
              <View style={InfoServiceStyle.InfoDataGeneral}>
                  <Image style={InfoServiceStyle.icon}
                          source={ iconSpe }/>
                  <Text style={InfoServiceStyle.InfoTextGeneral} >
                    {serviceInfo.specialty != undefined ? serviceInfo.specialty :  "------"}
                  </Text>
              </View>
        </View>
    </View>
  );
}
const InfoServiceGeneral = () => (

    <View style={InfoServiceStyle.InfoServiceGeneral}>
        <InfoServicePhoto />
        <InfoServiceUser />
    </View>
  );

export default InfoServiceGeneral;