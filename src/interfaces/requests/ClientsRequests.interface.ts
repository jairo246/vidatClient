import {Server} from "../../constants/network";

export interface MyToken {
    name: string;
    exp: number;
  }

/////////// ReAuthenticate ////////////
const linkReLoginUser = "clients/reauthenticate";
export const urlUserReLogin = `${Server}/${linkReLoginUser}`;

export type ReLoginUserTypeInput = {
    email: string;
    password: string;
    token: string;
}
export type ReLoginDataTypeOutput = {
    message: string;
    token: string;
    Encrip: string;
    error: string;
    
}
export type ReLoginUserTypeOutput = {
    status: number,
    send: string,
    data: ReLoginDataTypeOutput;
}