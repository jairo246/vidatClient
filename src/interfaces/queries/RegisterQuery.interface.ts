import {Server} from "../../constants/network";

const linkCreateUser = "clients";
export const urlCreateUser = `${Server}/${linkCreateUser}`;

export type RegisterQueryTypeInput = {
    name: string;
    rut: string;
    email: string;
    phone: string;
    nationality: string;
    address: string;
    birthday: string;
    password: string;
    onLoginPress: () => void;
}

export type CreateUserTypeInput = {
    name: string;
    rut: string;
    email: string;
    phone: string;
    nationality: string;
    address: string;
    birthday: string;
    password: string;
}

type CreateDataTypeOutput = {
    message: string;
    error: string;
}
export type CreateUserTypeOutput = {
    status: number,
    send: string,
    data: CreateDataTypeOutput;
}