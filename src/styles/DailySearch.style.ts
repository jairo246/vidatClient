import {StyleSheet, Dimensions  } from 'react-native';

export const hourSize = Dimensions.get('window').height / 13.34

const { width: ScreenWidth } = Dimensions.get("screen");

const sky_1  = '#CCFFFF';
const sky_2  = '#0099FF';
const sky_3  = '#0066CC';
const gray_1 = '#CCCCCC';
const gray_2 = '#999999';
const gray_3 = '#666666';
const hard_1 = '#CC0033';
const hard_2 = '#FF9933';
const hard_3 = '#66CC33';
const soft_1 = '#FF3399';
const soft_2 = '#9966CC';
const soft_3 = '#6666CC';
const dark   = '#000000';
const light  = '#FFFFFF';

export const DailySearchStyle = StyleSheet.create({
    screen:{
        flex: 1
    },
    head:{
      flex: 1
    },
    diary:{
      flex: 10.5
    },
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
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    BlockTextTitle:{
      fontWeight: '600',
      color: 'white',
      fontSize: 24
    },
    BlockTextSubTitle:{
      fontWeight: '200',
      color: 'white'
    },
    processButtonTouch: {
      height: 60,
      width: ScreenWidth * 0.3,
      backgroundColor: "#25a9e2",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      elevation: 5,
      shadowRadius: 8,
      shadowOpacity: 0.3,
      shadowColor: soft_3,
      shadowOffset: {
          width: 0,
          height: 3,
      },
    },
    processButtonText: {
        color: light,
        fontSize: 16,
        fontWeight: "bold",
    },
});