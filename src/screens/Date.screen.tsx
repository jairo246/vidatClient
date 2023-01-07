import { Button, View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { WallStackParamList } from '../interfaces/navigators/paramList.interface';
import Map from '../components/Date/Map';

const DateScreen = ({ route, navigation }:NativeStackScreenProps<WallStackParamList,"DateScreen">) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}
export default DateScreen;