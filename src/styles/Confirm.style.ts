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


const ConfirmStyle = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: light,
    },

    Indicator:{
        flex: 0.2,
        justifyContent: "flex-start",
    },

    Switch: {
        flex: 2,
        padding: 30,
        justifyContent: "flex-start",
        alignSelf: "center",
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

    Button: {
        flex: 0.5,
        justifyContent: "flex-end",
        alignSelf: "center",
        padding: 10
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
    ConfirmButtonTouch: {
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

});

export default ConfirmStyle;