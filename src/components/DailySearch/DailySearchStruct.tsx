import { useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ServiceContext } from '../../context/Service.context';
import { ScheduleContext } from '../../context/Schedule.context';

import { DailySearchType, BlockSearchShowType, TimeColType, DrawnGridType } from '../../interfaces/screens/DailySearchScreen.interface';
import { dataShow } from './DailySearchFunction';
import DailySearchBlock from './DailySearchBlock';
import { DailySearchStyle } from '../../styles/DailySearch.style';

const TimeArr = [
  "00:00",    "01:00",    "02:00",    "03:00",    "04:00",    "05:00",    "06:00",    "07:00",
  "08:00",    "09:00",    "10:00",    "11:00",    "12:00",    "13:00",    "14:00",    "15:00",
  "16:00",    "17:00",    "18:00",    "19:00",    "20:00",    "21:00",    "22:00",    "23:00",
  "24:00"
];
const HrLine = () => <View style={DailySearchStyle.HrLine}/>
const DrawnGrid = ({hour}:DrawnGridType) => <>{[...Array(hour)].map((val, i) => <HrLine key={i} />)}</>
const TimeCol = ({TimeArr}:TimeColType) =>(

  <View style={DailySearchStyle.TimeColView}>
    {TimeArr.map((val,index) =>
      <View style={DailySearchStyle.TimeView} key={index}>
        <Text style={DailySearchStyle.TimeText}>{val}</Text>
      </View>
    )}
  </View>
)

const DailySearch = ({chosenDay,onConfirmhPress}:DailySearchType) => {

  const { schedulesClient, schedulesProvider } = useContext(ScheduleContext);
  const { serviceInfo } = useContext(ServiceContext);

  let data:Array<BlockSearchShowType> = dataShow(chosenDay,serviceInfo.officeHours,schedulesClient,schedulesProvider);

  return (

    <ScrollView style={DailySearchStyle.container}>
        <View style={DailySearchStyle.body}>
            <View style={DailySearchStyle.hour_col}>
              <TimeCol TimeArr={TimeArr}/>
            </View>
            <View style={DailySearchStyle.schedule_col}>
                <DrawnGrid hour={TimeArr.length}/>
                <View style={DailySearchStyle.BlockMain}>

                  {data.map((block:BlockSearchShowType, index:number) => <DailySearchBlock  key={index} 
                                                                            color={block.color}
                                                                            end={block.end}
                                                                            height={block.height}
                                                                            start={block.start}
                                                                            subtitle={block.subtitle}
                                                                            title={block.title}
                                                                            top={block.top}
                                                                            status={block.status}
                                                                            onConfirmhPress={onConfirmhPress}
                  />)} 

                </View>
            </View>
        </View>
    </ScrollView>
)}



export default DailySearch;