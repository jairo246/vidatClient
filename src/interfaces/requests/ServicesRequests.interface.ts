import {Server} from "../../constants/network";

/////////// Post ////////////
const linkService= "services/getService";
export const urlService = (serviceId: number) => `${Server}/${linkService}/${serviceId}`;