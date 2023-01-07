import {Server} from "../../constants/network";

/////////// Put ////////////
const linkDateState= "schedules/updateScheduleState";
export const urlDateState = `${Server}/${linkDateState}`;

export type StateTypeInput = {
    id: number;
    state: "SENT" | "ACCEPT" | "REJECT" | "CONFIRM" | "DONE";
}

export type ButtonTypeInput = {
    id: number;
    state: "SENT" | "ACCEPT" | "REJECT" | "CONFIRM" | "DONE";
    color: string;
    text: string;
}

type DataTypeOutput = {
    message: string;
    error: string;
}

export type StateTypeOutput = {
    status: number,
    send: string,
    data: DataTypeOutput;
}