import {Server} from "../../constants/network";

/////////// Post ////////////
const linkSchedule= "schedules/requestProvider";
export const urlSChedule = (providerId: number) => `${Server}/${linkSchedule}/${providerId}`;

export type ButtonSchechuleIdType = {
    onCalenderSearchPress: () => void;
}