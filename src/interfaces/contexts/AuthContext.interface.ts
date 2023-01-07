import { ReactNode } from "react";
import {Server} from "../../constants/network";

export type AuthContextMethod = {
    jwt: string;
    authLoad: () => void;
    authLogin: (token:string) => void;
    authLogout: () => void;
};

export const authContextDefaultValues: AuthContextMethod = {
    jwt: "",
    authLoad: () => {},
    authLogin: () => {},
    authLogout: () => {},
};

export type AuthContextChildren = {
    children: ReactNode;
};

const linkReLoginUser = "clients/reauthenticate";
export const urlUserReLogin = `${Server}/${linkReLoginUser}`;

export type GetProviderTypeOutput = {
        id: number;
        name: string;
        rut: string;
        nationality: string;
        birthday: Date;
        email: string;
        phone: string;
        address: string
        password: string;
        properties: string;
        type: string;
        exp: number;
    }
