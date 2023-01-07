import {StyleSheet } from 'react-native';


const gray_2 = '#999999';
const light  = '#FFFFFF';

const colorFinished = "#166080";
const colorWait     = "#25a9e2";
const colorSecond   = light;
const colorLabel    = gray_2;


const SearchStackStyle = StyleSheet.create({

    Stack:{
        flex:1
    },
    StepIndicator:{
        flex:1,
        marginTop: 35
    },
    Screens:{
        flex:9
    }
});

export default SearchStackStyle;

export const StepIndicatorStyle = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colorFinished,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colorFinished,
    stepStrokeUnFinishedColor: colorWait,
    separatorFinishedColor: colorFinished,
    separatorUnFinishedColor: colorWait,
    stepIndicatorFinishedColor: colorFinished,
    stepIndicatorUnFinishedColor: colorSecond,
    stepIndicatorCurrentColor: colorSecond,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colorFinished,
    stepIndicatorLabelFinishedColor: colorSecond,
    stepIndicatorLabelUnFinishedColor: colorWait,
    labelColor: colorLabel,
    labelSize: 13,
    currentStepLabelColor: colorFinished
  }