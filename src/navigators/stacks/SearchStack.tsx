import { useContext } from "react";
import { View } from "react-native";
import { SearchContext } from "../../context/Search.context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { SearchStackParamList } from '../../interfaces/navigators/paramList.interface';

import StepIndicator from 'react-native-step-indicator';
import CategorySearchScreen from '../../screens/CategorySearch.screen';
import SpecialtySearchScreen from '../../screens/SpecialtySearch.screen';
import ResultServiceScreen from '../../screens/ResultService.screen';
import InfoServiceScreen from '../../screens/InfoService.screen';
import CalenderSearchScreen from "../../screens/CalenderSearch.screen";
import ConfirmScreen from "../../screens/Confirm.screen";
import DailySearchScreen from "../../screens/DailySearch.screen";
import SearchStackStyle from "../../styles/SearchStack.style";
import { StepIndicatorStyle } from "../../styles/SearchStack.style";

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStack = () => {

    const {search} = useContext(SearchContext)

  return (
    <View style={SearchStackStyle.Stack}>
        <View style={SearchStackStyle.StepIndicator}>
            <StepIndicator
                customStyles={StepIndicatorStyle}
                stepCount={search.labels.length}
                currentPosition={search.currentPosition}
                labels={search.labels}
            />

        </View>
        <View style={SearchStackStyle.Screens}>
            <Stack.Navigator initialRouteName="CategorySearchScreen" screenOptions={{ headerShown: false }} >
              <Stack.Screen name="CategorySearchScreen" component={CategorySearchScreen}  />
              <Stack.Screen name='SpecialtySearchScreen' component={SpecialtySearchScreen}/>
              <Stack.Screen name="ResultServiceScreen" component={ResultServiceScreen}  />
              <Stack.Screen name="InfoServiceScreen" component={InfoServiceScreen}  />
              <Stack.Screen name="CalenderSearchScreen" component={CalenderSearchScreen} />
              <Stack.Screen name="DailySearchScreen" component={DailySearchScreen} />
              <Stack.Screen name="ConfirmScreen" component={ConfirmScreen}  />
            </Stack.Navigator>
        </View>
    </View>
    

  );
}

export default SearchStack;