import { ReactNode } from "react";
import { ServiceInfoType } from "./ServiceContext.interface";

export type PropertiesSchedulesDateType = {
    start: Date;
    end: Date;
}
export type NewSchedulesType = {
    place: string;
    description: string;
    serviceId: number;
    unitCost: number;
    payment: string;
    amount: number;
    state: "SENT" | "ACCEPT" | "REJECT" | "CONFIRM" | "DONE";
    dayle: PropertiesSchedulesDateType
}
export const newSchedulesDefault:NewSchedulesType = { 

    amount: -1,
    description: "",
    payment: "",
    serviceId: -1,
    unitCost: -1,
    place: "",
    state: "SENT",
    dayle:{ 
            start: new Date(),
            end: new Date()
            }
                
};
type PropertiesSchedulesType = {
    start: string;
    end: string;
}
export type SchedulesType = {
    id: number
    state: "SENT" | "ACCEPT" | "REJECT" | "CONFIRM" | "DONE";
    serviceId: number;
    contractId: number;
    properties: PropertiesSchedulesType
}
export const SchedulesDefault:SchedulesType = {
    id: -1,
    state: "REJECT",
    serviceId: -1,
    contractId: -1,
    properties: { start: "2000-01-01T00:00:00.000Z", end: "2000-01-01T00:00:00.000Z" }
}
export type ContractType = {
    id: number;
    place: string;
    description: string;
    payment: string;
    amount: number;
    properties: SchedulesType
    schedules: Array<SchedulesType>
}
export type ServiceType = {
    serviceId: number,
    schedules: Array<SchedulesType>
}
export type ScheduleItem = {
    id: number; 
    contractId: number;
    place: string;
    description: string;
    payment: string;
    amount: number;
    state: "SENT" | "ACCEPT" | "REJECT" | "CONFIRM" | "DONE";
    dayle: PropertiesSchedulesType
}
export const scheduleDefault:ScheduleItem = {
    amount: -1,
    contractId: -1,
    dayle: {
        end: "",
        start: "",
    },
    description: "",
    id: -1,
    payment: "",
    place: "",
    state: "SENT"
}
export type ScheduleContextMethod = {
    newSchedule: NewSchedulesType;
    schedule: ScheduleItem;
    schedulesClient: Array<ScheduleItem>
    schedulesProvider: Array<ScheduleItem>
    setInfoSchedule(serviceInfo:ServiceInfoType): void
    setChooseHour(hour: PropertiesSchedulesDateType): void
    updateClient(schedule:Array<ContractType>): void
    updateProvider(schedule:Array<ServiceType>): void
    showSchedule(id: number): void;
};
export const schedulesContextDefaultValues: ScheduleContextMethod = {
    newSchedule: newSchedulesDefault,
    schedule: scheduleDefault,
    schedulesClient: [],
    schedulesProvider: [],
    setInfoSchedule (serviceInfo) {},
    setChooseHour(hour) {},
    updateClient(schedule) {},
    updateProvider(schedule) {},
    showSchedule(id) {}
};
export type ScheduleContextChildren = {
    children: ReactNode;
};