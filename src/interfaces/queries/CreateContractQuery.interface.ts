import {Server} from "../../constants/network";

/////////// Post Contract////////////
const linkCreateContract= "contracts";
export const urlCreateContract= `${Server}/${linkCreateContract}`;

type ContractDataTypeOutput = {
    id: number
    place: string;
    description: string;
    payment: string;
    amount: number;
}

export type ContractTypeOutput = {
    status: number,
    send: string,
    error: string;
    data: ContractDataTypeOutput;
}

/////////// Post Schedule ////////////
const linkSchedule= "schedules";
export const urlSchedule= `${Server}/${linkSchedule}`;

type ScheduleDataTypeOutput = {
    message: string;
    serviceId: number;
    contractId: number;
}

export type ScheduleTypeOutput = {
    status: number,
    send: string,
    error: string;
    data: ScheduleDataTypeOutput;
}

///////////  Sent Button ////////////

export type ButtonCreateContractType = {
    onWallrPress: () => void;
}