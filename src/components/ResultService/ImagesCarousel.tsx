import { useRef, useState } from 'react';
import { Image, View, FlatList, TouchableOpacity } from 'react-native';
import { ImagesCarouselType, RenderItemType } from '../../interfaces/screens/ResultService.interface';

import { color } from '../../constants/color';
import { LoadingView } from '../Message/Loading';
import { servicePhoto } from "../../constants/linkPhoto";
import ResultServiceStyle from '../../styles/ResultService.style';

const empty = require("../../../assets/empty.png")

const Item = ({item}:RenderItemType) => {

  const [imageLoading, setIsImageLoading] = useState(true);

    return(
      <TouchableOpacity 
            onPress={() => console.log('clip')}
            activeOpacity={1}
          >
          <Image  style={ResultServiceStyle.Imagen}
                  source={{ uri: servicePhoto + item }}
                  onLoadEnd={() =>  setIsImageLoading(false)}
          />
          {imageLoading && <LoadingView/>}
      </TouchableOpacity>
    );
}
const renderItem = ({item}:RenderItemType) => <Item item={item}/>

const ImagesCarousel = ({
        images,
        position,
        setPosition}:ImagesCarouselType) => {

    let flatListRef = useRef<FlatList<RenderItemType> | null>();
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 95})

    const onViewRef = useRef(({ changed }:{ changed:any}) => {
      if(changed[0].isViewable) {
        setPosition(changed[0].index);
      }
    });
    const scrollIndex = (index: number) => {
      flatListRef.current?.scrollToIndex({ animated: true, index: index});
    }

    return(
      <View >
        {images.length != 0 ?
          <>
            <FlatList
              data={images}
              renderItem={renderItem}
              keyExtractor={(item,index) => index.toString()}
              horizontal
              showsVerticalScrollIndicator={false}
              pagingEnabled         
              style={ResultServiceStyle.Carousel}
              viewabilityConfig={viewConfigRef.current}
              onViewableItemsChanged={onViewRef.current}

              ref={(ref) => {
                // @ts-ignore
                flatListRef.current = ref;
              }}
            />
            <View style={ResultServiceStyle.DotView}>
              {images.map(({},index:number) => (
                  <TouchableOpacity key={index.toString()}
                    style={[ResultServiceStyle.Cicle,
                            {backgroundColor: index == position ? color.blue_2 : color.gray_1 }]}
                    onPress={() => scrollIndex(index)}
                  />
              ))}
            </View>
          </>
          :
          <Image style={ResultServiceStyle.Imagen}
              source={empty} />        
            }
    </View>
    );  
};

export default ImagesCarousel;