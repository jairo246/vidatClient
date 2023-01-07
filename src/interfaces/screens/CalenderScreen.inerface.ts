import { AgendaSchedule} from 'react-native-calendars';

export interface CalenderType{
    items: AgendaSchedule
    setItems(items: AgendaSchedule) : void;
}