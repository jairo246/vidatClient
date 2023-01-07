import { useState } from 'react';
import { Alert, Text, View, TouchableOpacity} from 'react-native';
import { Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { CalenderStyle } from '../../styles/Calender.style';

// @ts-ignore
   //reservationsKeyExtractor = (item, index) => {
   //  return `${item?.reservation?.day}${index}`;
   //};

const timeToString =(time: number) =>  {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}
const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
  return r1.name !== r2.name;
}
const renderEmptyDate = () => {
  return (
    <View style={CalenderStyle.emptyDate}>
      <Text>This is empty date!</Text>
    </View>
  );
}
const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
  const fontSize = isFirst ? 16 : 14;
  const color = isFirst ? 'black' : '#43515c';

  return (
    <TouchableOpacity
      testID={'item'}
      style={[CalenderStyle.item, {height: reservation.height}]}
      onPress={() => Alert.alert(reservation.name)}
    >
      <Text style={{fontSize, color}}>{reservation.name}</Text>
    </TouchableOpacity>
  );
}

const AgendaDay = () =>  {

  const [items,setItems] = useState<AgendaSchedule>(
    {
      '2022-09-17': [{name: 'item 1 - any js object', height: 80, day: '18:00'}],
      '2022-09-18': [{name: 'item 2 - any js object', height: 80, day: '19:00'}],
      '2022-09-19': [{name: 'item 3 - any js object', height: 80, day: '14:00'}],
      '2022-09-20': [{name: 'item 4 - any js object', height: 80, day: '16:00'}]
    }
  )

const loadItems = (day: DateData) => {

    const items_ = items || {};

    setTimeout(() => {

        const time = day.timestamp;
        const strTime = timeToString(time);

        if (!items_[strTime]) {

          items_[strTime] = [];
          items_[strTime].push({
            name: 'Empty Date',
            height: 30,
            day: strTime
          });
        }
      
      const newItems: AgendaSchedule = {};
      Object.keys(items_).forEach(key => {
        newItems[key] = items_[key];
      });
      setItems(newItems);

    }, 1000);
  }   
    return (
      <Agenda
        testID={'agenda'}
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-09-17'}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        // markingType={'period'}
        // markedDates={{
        //    '2022-09-08': {textColor: '#43515c'},
        //    '2022-09-09': {textColor: '#43515c'},
        //    '2022-09-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2022-09-21': {startingDay: true, color: 'blue'},
        //    '2022-09-22': {endingDay: true, color: 'gray'},
        //    '2022-09-24': {startingDay: true, color: 'gray'},
        //    '2022-09-25': {color: 'gray'},
        //    '2022-09-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
        // reservationsKeyExtractor={this.reservationsKeyExtractor}
      />
    );
}

export default AgendaDay;