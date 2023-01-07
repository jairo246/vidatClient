import {StyleSheet, Dimensions } from 'react-native';
const hourSize = Dimensions.get('window').height / 13.34;

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


const DateStyle = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        width: ScreenWidth,
        height: "100%",
    },
    indicator:{
        flex: 0.2,
        justifyContent: "flex-start",
        marginTop: 75,
    },
    switch: {
        flex: 2,
        padding: 30,
        justifyContent: "flex-start",
        alignSelf: "center",
    },
    textSelect: {
        alignSelf: "flex-start",
        width: ScreenWidth * 0.8,
        backgroundColor: light,
        marginTop: 5,
        paddingLeft: 10,
        borderRadius: 5,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: gray_1,
        padding: 10,
    },
    buttonSelect: {
        borderRadius: 5,
        height: 40,
        margin: 10,
        borderColor: gray_1,
        padding: 10,
        fontSize: 15,
    },
    map: {
        alignSelf: "center",
        width: ScreenWidth*0.9,
        marginTop: 15,
        height: 380,
    },
    textInputContainer: {
        backgroundColor: light,
        marginTop: 5,
        paddingLeft: 10,
    },
    title: {
        color: dark,
        fontWeight: 'bold',
        fontSize: 30,
    },
    subtitle: {
        color: gray_3,
        fontWeight: 'bold',
        fontSize: 20,
    },
    textBox: {
        borderRadius: 5,
        width: ScreenWidth * 0.8,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: gray_1,
        padding: 10,
    },
    addressTextBox: {
        borderRadius: 5,
        width: ScreenWidth * 0.9,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: dark,
        color: dark,
        padding: 10,
    },
    descriptionTextBox: {
        borderRadius: 5,
        width: ScreenWidth * 0.8,
        height: 150,
        margin: 10,
        borderWidth: 1,
        borderColor: gray_1,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        backgroundColor: light,
        justifyContent: 'flex-start',
    },
    textBoxUnitCost: {
        borderRadius: 5,
        width: ScreenWidth * 0.4,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: gray_1,
        padding: 10,
    },
    textBoxCurrency: {
        backgroundColor: light,
        borderRadius: 5,
        width: ScreenWidth * 0.3,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: gray_1,
        padding: 10,
    },
    textKey: {
        borderRadius: 5,
        width: ScreenWidth * 0.4,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: gray_1,
        padding: 10,

    },
    textValue: {
        borderRadius: 5,
        width: ScreenWidth * 0.3,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: gray_1,
        padding: 10,

    },
    dayButtonTouch: {
        height: 30,
        width: ScreenWidth * 0.8,
        backgroundColor: "#25a9e2",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        elevation: 5,
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: soft_3,
        marginTop: 30,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    dayButtonText: {
        color: light,
        fontSize: 16,
        fontWeight: "bold",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        height: 500,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: ScreenWidth*0.9,
    },
    buttonModal: {
        alignSelf: "center",
        width: ScreenWidth*0.5,
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonCreateBlock: {
        width: ScreenWidth*0.5,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 15,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        alignSelf: "center",
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    addBlockTitle: {
        alignSelf: "center",
        color: dark,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 15,
    },
    addBlockTextBox: {
        borderRadius: 5,
        width: ScreenWidth * 0.6,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: dark,
        color: dark,
        padding: 10,
    },


    button: {
        flex: 0.5,
        justifyContent: "flex-start",
        alignSelf: "center",
        marginTop: 10,
    },
    buttonStyleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: ScreenWidth*0.9,
        marginBottom: 15,
    },
    cancelButtonTouch:{
        height: 60,
        width: ScreenWidth * 0.3,
        backgroundColor: "#166080",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        elevation: 5,
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: soft_2,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    cancelButtonText:{
        color: light,
        fontSize: 16,
        fontWeight: "bold",
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
    confirmButtonTouch: {
        height: 60,
        width: ScreenWidth * 0.3,
        backgroundColor: hard_3,
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
    confirmButtonText: {
        color: light,
        fontSize: 16,
        fontWeight: "bold",
    },

    officeHours: {
        backgroundColor: "white",
        width: ScreenWidth*0.9,
    },
    officeHours_CreateTimeBlock: {
        backgroundColor: "white",
    },
    addBlock: {
        alignSelf: "center"
    },
    officeHours_DailyTimeBlocks: {
        flex: 1,
        backgroundColor: "blue",
        height: 500,
    },
    officeHours_Agenda: {
        backgroundColor: "white",
        height: 50000,
    },


    agendaContainer: {
        flex: 1,
        height: 25*hourSize,
        marginTop:15,
        marginBottom:30,
    },
    agendaBody: {
        flex: 1, width: ScreenWidth * 0.9,
        flexDirection: 'row',
    },
    agendaHour: {
        flexDirection: 'column',
    },
    agendaSchedule: {
        flex: 1
    },
    TimeColView: {
        paddingTop: hourSize / 2,
        marginRight: 20,
    },
    TimeView: {
        justifyContent: "center",
        height: hourSize
    },
    TimeText:{
        alignSelf: "center",
        color: '#BABABA',
    },
    HrLine:{
        width: ScreenWidth * 0.7,
        paddingTop: hourSize - 1,
        borderBottomColor: '#BABABA',
        borderBottomWidth: 1,
        alignSelf: "center",
    },
    BlockMain:{
        width: '100%',
        position: 'absolute',
        flexDirection: 'column',
        alignSelf: "center",
    },
    BlockTouch:{
        width: ScreenWidth * 0.6,
        position: 'relative',
        borderRadius: 10,
        overflow: 'hidden',
        alignSelf: "center",
        flex: 1
    },
    ServiceImagesButtonStyle: {
        height: 40,
        width: ScreenWidth * 0.4,
        backgroundColor: "#25a9e2",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 32,
        elevation: 5,
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    ServiceImagesStyle: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    ServicePhotoList: {
        alignSelf: "center",
    },
    ServicePhoto: {
        width: ScreenWidth*0.8,
        minHeight: 200,
        margin: 15,
    }
});


const colorFinished = "#166080";
const colorWait     = "#25a9e2";
const colorSecond   = light;
const colorLabel    = gray_2;



export default DateStyle;