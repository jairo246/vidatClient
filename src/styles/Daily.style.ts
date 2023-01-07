import {StyleSheet, Dimensions  } from 'react-native';

export const hourSize = Dimensions.get('window').height / 13.34

export const DailyStyle = StyleSheet.create({
    container: {
      flex: 1,
      height: 25*hourSize
    },
    body: {
      flex: 1,
      flexDirection: 'row',
    },
    hour_col: {
      width: 60,
      flexDirection: 'column',
    },
    schedule_col: {
      flex: 1
    },
    TimeColView: {
      paddingTop: hourSize / 2
    },
    TimeView: {
      justifyContent: 'center',
      alignItems:'center',
      height: hourSize
    },
    TimeText:{
      textAlign:'center',
      color: '#BABABA',
    },
    HrLine:{
        width: '100%',
        paddingTop: hourSize - 1,
        borderBottomColor: '#BABABA',
        borderBottomWidth: 1,
    },
    BlockMain:{
      width: '100%',
      position: 'absolute',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    BlockTouch:{
      position: 'relative',
      marginRight: 10,
      borderRadius: 10,
      overflow: 'hidden',
      flex: 1
    },
    BlockTextTitle:{
      fontWeight: '600',
      color: 'white'
    },
    BlockTextSubTitle:{
      fontWeight: '200',
      color: 'white'
    },
});