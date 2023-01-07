import {StyleSheet } from 'react-native';
import { color } from '../constants/color';

const LoadingStyle = StyleSheet.create({
    indicatorWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: 'rgba(100, 100, 100, 0.6)',
    },
    indicatorText: {
      fontSize: 18,
      marginTop: 12,
    },
    indicatorWrapperView: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(100, 100, 100, 0.6)',
    }
});

export default LoadingStyle;