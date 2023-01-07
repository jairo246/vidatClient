import {Server} from "../../constants/network";

const linkRecoverUser = "accounts/clients/recover";
export const urlRecoverUser = `${Server}/${linkRecoverUser}`;

export type RecoverQueryTypeInput = {
    email: string;
    password: string;
    onLoginPress: () => void;
}

export type RecoverUserTypeInput = {
    email: string;
    password: string;
}
type RecoverDataTypeOutput = {
    email: string
}
export type RecoverUserTypeOutput = {
    success: boolean;
    statusCode: number;
    message: string;
    data: RecoverDataTypeOutput;
}