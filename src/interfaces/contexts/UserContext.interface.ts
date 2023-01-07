import { ReactNode } from "react";
import {Server} from "../../constants/network";

export type UserItem = {
    id: number;
    name: string;
    rut: string;
    nationality: string;
    birthday: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    properties: object;
    type: string;
}

export const initialUserItem:UserItem = {
    id: -1,
    name: "",
    rut: "",
    nationality: "",
    birthday: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    properties: {},
    type: "",
};

export type UserContextMethod = {
    user: UserItem;
    userUpdate: (token:string) => void;
}

export const userContextDefaultValues: UserContextMethod = {
    user: initialUserItem,
    userUpdate:() => {},
};

export type UserContextChildren = {
    children: ReactNode;
};

const linkGetUserData = "providers/requestData";
export const urlGetUserData = `${Server}/${linkGetUserData}`;