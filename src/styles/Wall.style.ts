import {StyleSheet, Dimensions } from 'react-native';
import { color } from '../constants/color';
const { width: ScreenWidth } = Dimensions.get("screen");
const scale = ScreenWidth / 320;

const normalize = (size:number) => {
    const newSize = size * scale 
    return newSize
  }

const WallStyle = StyleSheet.create({
    Screen:{
        marginTop: 15,
        marginBottom: 15
    },
    Item:{
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#A9A9A9",
        borderBottomColor: "#A9A9A9",
        backgroundColor: "#fff",
        height: 150,
    },
    ItemShort:{
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#A9A9A9",
        borderBottomColor: "#A9A9A9",
        backgroundColor: "#fff",
        height: 100,
    },
    AppointmentIcon:{
        flex: 1.5
    },
    Headers:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    TextHeaders:{
        fontSize: normalize(15),
        color: color.blue_2
    },
    Icon:{
        flex: 3,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    Footer:{
        flex: 2,
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: "row",
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
    AppointmentInfo:{
        flex: 4
    },
    AppointmentHeader:{
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 10
    },
    AppointmentContent:{
        flex: 5,
        justifyContent: 'center'
    },
    AppointmentFooter:{
        flex: 2,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 10
    },
    AppointmentViewTitle:{
        marginLeft: 5
    },
    AppointmentTextTitle:{
        fontSize: 15,
        color: color.blue_2
    },
    AppointmentTextMain:{
        fontSize: 28,
        fontWeight: "bold",
        color: color.blue_2
    },
    AppointmentTextFooter:{
        fontSize: 12,
        color: color.blue_2
    },
    AppointmentViewMain:{
        alignItems: 'center', 
        justifyContent: 'center'
    },
    AppointmentViewState:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    AppointmentTouchState: {
        height: 40,
        width: ScreenWidth * 0.3,
        backgroundColor: "black",
        borderRadius: 8,
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
    AppointmentTextState: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default WallStyle;