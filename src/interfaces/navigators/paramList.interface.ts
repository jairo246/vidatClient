import { DateData } from 'react-native-calendars';
import { NavigatorScreenParams } from '@react-navigation/native';

// requirement to enter the screen

  //////// Stack ///////

export type RootLoginStackParamList = {

    LoginScreen: undefined;
    RegisterScreen: undefined;
    RecoverScreen: undefined;

  };
  export type SearchStackParamList = {

    CategorySearchScreen: undefined;
    SpecialtySearchScreen: undefined;
    ResultServiceScreen: undefined;
    InfoServiceScreen: undefined;
    CalenderSearchScreen: undefined;
    DailySearchScreen: {chosenDay: DateData};
    ConfirmScreen: {chosenDay: DateData};
  }
  export type SchedulingStackParamList = {

    CalenderScreen: undefined;
    DailyScreen: {chosenDay: DateData};

  }
  export type WallStackParamList = {

    WallScreen: undefined;
    DateScreen: {contractId: number};
    PayScreen: undefined;
  }

      //////// Tab ///////
  export type RootHomeTabParamList = {

    SearchStack: NavigatorScreenParams<SearchStackParamList>
    SchedulingStack: NavigatorScreenParams<SchedulingStackParamList>;
    WallStack: NavigatorScreenParams<WallStackParamList>

  };
