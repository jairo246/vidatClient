import { Button, View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { WallStackParamList } from '../interfaces/navigators/paramList.interface';

const PayScreen = ({ route, navigation }:NativeStackScreenProps<WallStackParamList,"PayScreen">) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>First Screen</Text>
      <Button
        title="Go to Evaluation"
        onPress={() => navigation.navigate('WallScreen')}
      />
    </View>
  );
}
export default PayScreen;