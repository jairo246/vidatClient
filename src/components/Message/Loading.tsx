import { useContext } from 'react';
import { MsgContext } from "../../context/Msg.context";
import { color } from '../../constants/color';
import { Modal, View, ActivityIndicator, Text} from "react-native";
import LoadingStyle from "../../styles/Loading.style";

export const LoadingScreen = () => {

  const { loading } = useContext(MsgContext);

    return (
      <Modal transparent={true} visible={loading.screen} >
        <View style={LoadingStyle.indicatorWrapper}>
          <ActivityIndicator size="large" color={color.blue_2}/>
        </View>
      </Modal>
    );
}

export const LoadingView = () =>{
  return (
    <View style={LoadingStyle.indicatorWrapperView}>
      <ActivityIndicator size="large" color={color.blue_2}/>
    </View>
  );
}
