import { useContext } from "react";
import { Text, TouchableOpacity } from 'react-native';
import { ScheduleContext } from "../../context/Schedule.context";

import { ButtonBlockType } from '../../interfaces/screens/DailySearchScreen.interface';
import { DailySearchStyle } from '../../styles/DailySearch.style';


const DailySearchBlock = ({
    color,
    end,
    height,
    start,
    subtitle,
    title,
    top,
    status,
    onConfirmhPress
    }:ButtonBlockType) => {
  
  const { setChooseHour } = useContext(ScheduleContext)
  
    return(

    <TouchableOpacity 
                style={[DailySearchStyle.BlockTouch,{
                  marginTop: top,
                  height: height,
                  backgroundColor: color,
                }]}
                disabled={status == "hourFree" ? false : true}
                onPress={() => {
                  setChooseHour({start:start, end:end})
                  onConfirmhPress()
                }}
          >
                <Text style={DailySearchStyle.BlockTextTitle}>
                  {title}
                </Text>
                <Text style={DailySearchStyle.BlockTextSubTitle}>
                      {subtitle}
                </Text>
          </TouchableOpacity>

    
  )};

export default DailySearchBlock;