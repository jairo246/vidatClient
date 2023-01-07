import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";

import { AuthContext } from "../context/Auth.context";
import { MsgContext } from "../context/Msg.context";
import { ScheduleContext } from "../context/Schedule.context";

import { urlShowAppointments } from "../interfaces/requests/ShedulesRequests.interface";
import { ContractTypeOutput, urlCreateContract } from "../interfaces/queries/CreateContractQuery.interface";
import { ScheduleTypeOutput, urlSchedule } from "../interfaces/queries/CreateContractQuery.interface";
import { ButtonCreateContractType } from "../interfaces/queries/CreateContractQuery.interface";

import { RequestAppointmentPostState,  RequestAppointmentsGetShow } from "../requests/Schedules.requests";
import { RequestContractPostState } from "../requests/Contracts.requests";
import ConfirmStyle from "../styles/Confirm.style";

const sentButtonText= "Agendar"
export const ButtonCreateContract = ({onWallrPress}:ButtonCreateContractType) => {

    const { jwt } = useContext(AuthContext);
    const { showMsg, errorCatch, loadingScreen } = useContext(MsgContext);
    const { newSchedule, updateClient } = useContext(ScheduleContext);

    const CreateScheduleConclusion = (res:ScheduleTypeOutput) => {

        if(res.status == 201){

            fetch(urlShowAppointments,RequestAppointmentsGetShow(jwt))
            .then(res => res.json())
            .then(data => {updateClient(data.data); loadingScreen(false)})
            .catch(error => {errorCatch(); loadingScreen(false)})
            

            onWallrPress();
            showMsg(res.data.message);
        }
        else{
            loadingScreen(false)
            showMsg(res.error)
        }
    }

    const CreateContractConclusion = (res:ContractTypeOutput) => {

        if(res.status == 201){

            fetch(urlSchedule,RequestAppointmentPostState(res.data.id,newSchedule,jwt))
            .then(res => res.json())
            .then(data => CreateScheduleConclusion(data))
            .catch(error => {errorCatch(); loadingScreen(false)})
            
        }
        else{
            loadingScreen(false);
            showMsg(res.error)
        }
    }

    const CreateContract = () => {
    
        loadingScreen(true)
        fetch(urlCreateContract,RequestContractPostState(newSchedule,jwt))
        .then(res => res.json())
        .then(data => CreateContractConclusion(data))
        .catch(error => {errorCatch(); loadingScreen(false)})
}

    return(
        <TouchableOpacity
            style={ConfirmStyle.ConfirmButtonTouch}
            onPress={CreateContract}
        >
            <Text style={ConfirmStyle.processButtonText}>
                {sentButtonText}
            </Text>
        </TouchableOpacity>
    )
};