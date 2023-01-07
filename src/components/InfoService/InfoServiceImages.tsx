import { useContext, useState } from 'react';
import { Image, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { InfoRenderItemType, InfoRenderItemListType } from '../../interfaces/screens/InfoService.interface';

import { servicePhoto } from "../../constants/linkPhoto";
import { LoadingView } from '../Message/Loading';
import { ServiceContext } from '../../context/Service.context';
import InfoServiceStyle from '../../styles/InfoService.style';

const RenderImagen = ({item}:InfoRenderItemType) => {

    const [imageLoading, setIsImageLoading] = useState(true);

      return(
        <TouchableOpacity onPress={() => console.log('clip')}>
          {item != "" ? 
            <>
                <Image style={InfoServiceStyle.InfoImagen}
                        source={{ uri: servicePhoto + item }} 
                        onLoadEnd={() =>  setIsImageLoading(false)}
                />
                {imageLoading && <LoadingView/>}
            </>
          : <></>}
        </TouchableOpacity>
      );
}
const renderItems:React.FC<{item: InfoRenderItemListType}> = ({item}) => {
  
    return (
      <View style={InfoServiceStyle.InfoRenderImages}>
        <RenderImagen item={item.left}/>
        <RenderImagen item={item.center}/>
        <RenderImagen item={item.right}/>
      </View>
    );
}
const InfoServiceImages = () => {

  const { serviceInfo } = useContext(ServiceContext);

    return (
      <SafeAreaView style={InfoServiceStyle.InfoBlockView}>
          <FlatList
            data={serviceInfo.images}
            renderItem={renderItems}
          />
      </SafeAreaView>
    );
  }

export default InfoServiceImages; 