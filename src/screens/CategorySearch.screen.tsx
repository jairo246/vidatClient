import { useContext, useEffect } from "react";
import { View } from "react-native";
import { SearchContext } from "../context/Search.context";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { SearchStackParamList } from '../interfaces/navigators/paramList.interface';
import ChooseCategory from '../components/CategorySearch/ChooseCategory';
import AudioCategory from '../components/CategorySearch/AudioCategory';
import CategorySearchStyle from '../styles/CategorySearch.style';

const CategorySearchScreen = ({ route, navigation }:NativeStackScreenProps<SearchStackParamList,"CategorySearchScreen">) => {

  const {setCurrentPosition} = useContext(SearchContext)

  useEffect(  () => setCurrentPosition(0),[]);

      return (
        <View style={CategorySearchStyle.CategorySearchScreen}>
            <AudioCategory/>
            <ChooseCategory onSpecialtySearchPress={() => {navigation.navigate("SpecialtySearchScreen")
                                                            setCurrentPosition(1)}}/>
        </View>
      );
}

export default CategorySearchScreen;