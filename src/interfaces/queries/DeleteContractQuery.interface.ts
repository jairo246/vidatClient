import {Server} from "../../constants/network";

/////////// Delete ////////////
const linkDeleteContract = "contracts/deleteService";
export const urlDeleteContract =  `${Server}/${linkDeleteContract}`;

type DataType = {
        message: string
}

export interface DeleteContractType{
    contractId: number
}


export type DeleteContractTypeOutput = {
        status: number;
        send: string;
        data: DataType;
}