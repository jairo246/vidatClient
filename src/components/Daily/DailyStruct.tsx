import { useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ServiceContext } from '../../context/Service.context';
import { ScheduleContext } from '../../context/Schedule.context';

import { DailyType, BlockInputType, BlockShowType, TimeColType, DrawnGridType } from '../../interfaces/screens/DailyScreen.interface';
import { dataShow } from './DailyFunction';
import DailyBlock from './DailyBlock';
import { DailyStyle } from '../../styles/Daily.style';

const TimeArr = [
  "00:00",    "01:00",    "02:00",    "03:00",    "04:00",    "05:00",    "06:00",    "07:00",
  "08:00",    "09:00",    "10:00",    "11:00",    "12:00",    "13:00",    "14:00",    "15:00",
  "16:00",    "17:00",    "18:00",    "19:00",    "20:00",    "21:00",    "22:00",    "23:00",
  "24:00"
];
const HrLine = () => <View style={DailyStyle.HrLine}/>
const DrawnGrid = ({hour}:DrawnGridType) => <>{[...Array(hour)].map((val, i) => <HrLine key={i} />)}</>
const TimeCol = ({TimeArr}:TimeColType) =>(

  <View style={DailyStyle.TimeColView}>
    {TimeArr.map((val,index) =>
      <View style={DailyStyle.TimeView} key={index}>
        <Text style={DailyStyle.TimeText}>{val}</Text>
      </View>
    )}
  </View>
)

const Daily = ({chosenDay}:DailyType) => {

  const { schedulesClient } = useContext(ScheduleContext);

  let data:Array<BlockShowType> = dataShow(chosenDay,schedulesClient);

  return (

    <ScrollView style={DailyStyle.container}>
        <View style={DailyStyle.body}>
            <View style={DailyStyle.hour_col}>
              <TimeCol TimeArr={TimeArr}/>
            </View>
            <View style={DailyStyle.schedule_col}>
                <DrawnGrid hour={TimeArr.length}/>
                <View style={DailyStyle.BlockMain}>

                  {data.map((block:BlockShowType, index:number) => <DailyBlock  key={index} 
                                                                            color={block.color}
                                                                            end={block.end}
                                                                            height={block.height}
                                                                            start={block.start}
                                                                            subtitle={block.subtitle}
                                                                            title={block.title}
                                                                            top={block.top}
                                                                            status={block.status}
                  />)} 

                </View>
            </View>
        </View>
    </ScrollView>
)}



export default Daily;