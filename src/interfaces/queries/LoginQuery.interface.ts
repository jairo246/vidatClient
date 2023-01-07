import {Server} from "../../constants/network";

const linkLoginUser = "clients/authenticate";
export const urlUserLogin = `${Server}/${linkLoginUser}`;

const linkUser = "clients/requestData";
export const urlShowUser = `${Server}/${linkUser}`;

export type LoginUserTypeInput = {
        email: string;
        password: string;
}
export type LoginDataTypeOutput = {
    message: string;
    token: string;
    error: string;
    
}
export type LoginUserTypeOutput = {
    status: number,
    send: string,
    data: LoginDataTypeOutput;
}
type PropertiesType = {
    agreement: Array<string>
    description: string;
    education: Array<string>
    photo: string
    work: Array<string>
}
export type GetClientTypeOutput = {
    address: string
    birthday: Date;
    email: string;
    password: string;
    exp: number
    id: number
    name: string
    nationality: string
    photo: string
    properties: PropertiesType
    rut: string
    type: string
}