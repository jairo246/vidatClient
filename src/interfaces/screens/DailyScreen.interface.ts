import { DateData } from 'react-native-calendars';

export type TimeColType = {
    TimeArr: Array<String>
}

export type DrawnGridType = {
    hour: number
}
export type DailyType = {
    chosenDay: DateData
}

export type ItemFreeInputType = {
    start: Date;
    end: Date;
}

export type BlockInputType = {

    title: string;
    subtitle: string
    start: Date;
    end: Date;
    color: string;
    status: "hourFree" | "client" | "provider"
}

export type BlockShowType = {

    title: string;
    subtitle: string
    start: Date;
    end: Date;
    top: number;
    height: number;
    color: string;
    status: "hourFree" | "client" | "provider"
}
