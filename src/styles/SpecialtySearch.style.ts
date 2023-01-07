import {StyleSheet, Dimensions } from 'react-native';

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

const SpecialtySearchStyle = StyleSheet.create({

    SpecialtySearchScreen:{ 
        flex: 1, 
    },
    SpecialtySearchAudio:{ 
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    SpecialtySearchChoose:{ 
        flex: 1.8,
    },
    SpecialtySearchChooseRow:{ 
        flexDirection: "row",
    },
    SpecialtyItemTouchSearch :{
        backgroundColor: '#313131',
        height: ScreenWidth/2,
        width: ScreenWidth/2 - 7,
        alignItems: 'center', 
        justifyContent: 'center',
        marginVertical: 2,
        marginHorizontal: 2,
        resizeMode: 'cover',
        
      },
      SpecialtyItemTextSearch:{
        color: '#f1f1f1f1',
        fontSize: 27,
        fontWeight: "bold",
      },

      buttonStyleContainer: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: ScreenWidth*0.9,
        marginBottom: 11,
        marginLeft: 17
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

export default SpecialtySearchStyle;