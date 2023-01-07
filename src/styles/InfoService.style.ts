import {StyleSheet, Dimensions } from 'react-native';
import { color } from '../constants/color';

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

const InfoServiceStyle = StyleSheet.create({
    InfoScree:{
      flex:1
    },
    InfoServiceGeneral:{
      flex: 1.2
    },
    InfoPhotoComponent:{
      backgroundColor: "#000000",
      flex: 3
    },
    InfoUserComponent:{
      flex: 2.4,
      backgroundColor: "#FFFFFF",
    },
    photo:{
      width: ScreenWidth,
      height: 230,
    },
    icon:{
      width: 25,
      height: 25,
    },
    InfoAvatarUser:{
        flex: 1
    },
    Avatar:{
      backgroundColor: "transparent",
      zIndex: 1,
      position: "absolute",
      bottom: 0,
      alignSelf: "flex-start",
      marginBottom: 6,
      marginLeft: 15,
      flexDirection: "row"
    },
    InfoBackgroundColor:{
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
      width: 120,
      height:120,
      borderRadius: 120/2
      
    },
    InfoAvatar: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginLeft: 7
    },
    InfoAvatarProfession: {
      color: "#0099FF",
      fontSize: 24,
      fontWeight: "bold",
    },
    InfoAvatarName: {
      color: "#33eaff",
      fontSize: 20,
      fontWeight: "bold",
    },
    InfoDataUser:{
        flex: 1.5,
        marginBottom: 15
    },
    InfoDataGeneral:{
      alignSelf: "flex-start",
      marginLeft: 25,
      marginTop: 10,
      flexDirection: "row"
    },
    InfoTextGeneral:{
      color: "#666666",
      fontSize: 16,
      alignItems: "center",
      fontWeight: "bold",
      marginLeft: 12,
    },
    InfoTab:{
      flex: 1
    },
    InfoDetails:{
      flex: 1,
    },
    InfoBlock:{
      flex: 1,
      flexDirection: "row"
    },
    InfoBlockView:{
      flex: 1,
    },
    InfoView:{
      flex: 0.2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: "#FFFFFF",
      
    },
    InfoViewTitle:{
      justifyContent: 'flex-end', 
    },
    InfoTextTitle: {
      color: "#0066CC",
      fontSize: 12,
      fontWeight: "bold",
      marginLeft: 15,
    },
    InfoTouchEdit:{
      justifyContent: 'flex-end', 
    },
    InfoTextEdit:{
      color: "#0066CC",
      fontSize: 12,
      fontWeight: "bold",
      marginRight: 15,
    },
    InfoViewDataDescription:{
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: "#0066CC",
      borderRadius: 16,
      marginLeft: 15,
      marginRight: 5,
    },
    InfoTextDataDescription: {
      color: "#FFFFFF",
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 15,
      marginRight:15,
    },
    InfoViewDataFree:{
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: "#66CC33",
      borderRadius: 16,
      marginLeft: 5,
      marginRight: 15,
    },
    InfoTextDataFree: {
      color: "#FFFFFF",
      fontSize: 35,
      fontWeight: "bold",
    },
    InfoSpecialtyBlock:{
        flex: 0.4,
    },
    Space:{
      flex: 0.5
    },
    InfoSpecialtyTouch:{
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: "#CCCCCC",
      borderRadius: 16,
      marginLeft: 60,
      marginRight: 60,
    },
    InfoTextSpecialty: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "bold",
    },
    InfoImagen:{
      width: ScreenWidth/3 - 4,
      height: 150,
      resizeMode: 'cover',
      marginVertical: 2,
      marginHorizontal: 2,
    },
    InfoRenderImages:{
      flexDirection: 'row',
    },

    buttonStyleContainer: {
      flex: 0.13,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: ScreenWidth*0.9,
      marginBottom: 15,
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
  InfoScheduleViewDays:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  InfoViewDay:{
    backgroundColor: color.blue_2,
      padding: 10,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: "#A9A9A9",
      borderBottomColor: "#A9A9A9",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: ScreenWidth,
  },
  InfoTextDay:{
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
  }

});

export default InfoServiceStyle;