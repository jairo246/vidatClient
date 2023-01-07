import { Text, TouchableOpacity } from 'react-native';
import { BlockShowType } from '../../interfaces/screens/DailyScreen.interface';
import { DailyStyle } from '../../styles/Daily.style';


const DailyBlock = ({
    color,
    end,
    height,
    start,
    subtitle,
    title,
    top,
    status
}:BlockShowType) => (

    <TouchableOpacity 
                style={[DailyStyle.BlockTouch,{
                  marginTop: top,
                  height: height,
                  backgroundColor: color,
                }]}
                disabled={status == "hourFree" ? false : true}
                onPress={() => {}}
          >
                <Text style={DailyStyle.BlockTextTitle}>
                  {"title"}
                </Text>
                <Text style={DailyStyle.BlockTextSubTitle}>
                      {"subtitle"}
                </Text>
          </TouchableOpacity>

    
  );

export default DailyBlock;