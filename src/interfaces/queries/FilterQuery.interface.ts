import {Server} from "../../constants/network";

/////////// Post ////////////
const linkFilter= "services/filterServices";
export const urlFilter = `${Server}/${linkFilter}`;

export interface ItemSpecialtyType {
    name: string
    color: string
    onResultServicePress: () => void;
}