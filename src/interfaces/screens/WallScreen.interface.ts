import { ScheduleItem } from "../contexts/ScheduleContext.interface";

export type AppointmentType ={
    scheduleItem: ScheduleItem
    onDatePress: () => void;
}
export type SituationType ={
    scheduleItem: ScheduleItem
}