import {StyleSheet, Dimensions } from 'react-native';
import { color } from '../constants/color';
const { width: ScreenWidth } = Dimensions.get("screen");


const ResultServiceStyle = StyleSheet.create({

    ResultScreen: {
        flex: 1
    },
    ResultList: {
        flex: 13
    },
    Empty:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    TouchEmpty:{
        height: ScreenWidth * 0.8,
        width: ScreenWidth * 0.8,
        backgroundColor: color.blue_2,
        borderRadius: ScreenWidth * 0.8/2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        elevation: 5,
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    TextEmpty:{
        color: color.light,
        fontSize: 30,
        fontWeight: "bold",
    },
    ResultItem:{

    },
    ResultItemFirst:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
        
    },
    ResultItemViewTitle:{
        marginLeft: 5
    },
    ResultItemTextTitle:{
        fontSize: 25,
    },
    ResultItemTouchInfo:{
        height: 30,
        width: 120,
        borderRadius: 10,
        backgroundColor: "#25a9e2",
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 15

    },
    ResultItemTextInfo:{
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    ResultItemImages:{

    },
    ResultItemEnd:{
        marginLeft: 5
    },
    ResultItemViewDescription:{
        marginBottom: 10
    },
    ResultItemTextDescription:{
        fontSize: 15,
    },
    ButtonTouch:{
        height: 50,
        width: ScreenWidth,
        backgroundColor: "#9966CC",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    ButtonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    Imagen:{
      width: ScreenWidth,
      height: 250,
      resizeMode: 'cover'
    },
    Carousel:{
        maxHeight: 300
    },
    DotView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    Cicle:{
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 50,
        marginHorizontal: 5
    },

    buttonStyleContainer: {
        flex: 1,
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
      shadowColor: color.soft_3,
      shadowOffset: {
          width: 0,
          height: 3,
      },
    },
    processButtonText: {
        color: color.light,
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ResultServiceStyle;