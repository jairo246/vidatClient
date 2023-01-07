import {Server} from "../../constants/network";

/////////// Update ////////////
const linkUpdateUser = "accounts/clints/update";
export const urlUpdateUser = `${Server}/${linkUpdateUser}`;

export type UpdateUserTypeInput = {
    relationalId: number;
    name: string;
    photo: string;
}
type UpdateDataTypeOutput = {
    data: string;
    valor: string;
}
export type UpdateUserTypeOutput = {
    success: boolean;
    statusCode: number;
    message: string;
    data: UpdateDataTypeOutput;
}


export type Change = {
    type: string
}

/////////// Update ////////////
const linkUpdatePhoto = "clients/updatePhoto";
export const urlUpdatePhoto = `${Server}/${linkUpdatePhoto}/2`;