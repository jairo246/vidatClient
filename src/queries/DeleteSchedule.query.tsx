import { useContext } from "react";
import { TouchableOpacity, Text, View,  } from "react-native";

import { AuthContext } from "../context/Auth.context";
import { MsgContext } from "../context/Msg.context";
import { ScheduleContext } from "../context/Schedule.context";

import { urlShowAppointments } from '../interfaces/requests/ShedulesRequests.interface';
import {  urlDeleteContract, DeleteContractType, DeleteContractTypeOutput } from "../interfaces/queries/DeleteContractQuery.interface"

import { RequestAppointmentsGetShow } from "../requests/Schedules.requests";
import { RequestAppointmentsDelete } from "../requests/Contracts.requests";
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from "../constants/color";
import WallStyle from "../styles/Wall.style";


export const ButtonDeleteContract = ({contractId}:DeleteContractType) => {

    const { jwt } = useContext(AuthContext);
    const { errorCatch, showMsg, loadingScreen} = useContext(MsgContext);
    const { updateClient } = useContext(ScheduleContext)

    const DeleteConclusion = (res:DeleteContractTypeOutput) => {

        if(res.status == 410){

            //// update list service ////
            fetch(urlShowAppointments,RequestAppointmentsGetShow(jwt))
                .then(res => res.json())
                .then(data => {updateClient(data.data); loadingScreen(false)})
                .catch(error => {errorCatch(); loadingScreen(false)})

            showMsg(res.data.message);
        }
        else{
            loadingScreen(false)
            showMsg("error no se  pudo eliminar");
        }
    }

    const Delete = () => {
        loadingScreen(true)
        fetch(urlDeleteContract,RequestAppointmentsDelete(jwt,contractId))
            .then(res => res.json())
            .then(data => DeleteConclusion(data))
            .catch(error => {errorCatch(); loadingScreen(false)})

    }

    return(
        <TouchableOpacity style={WallStyle.ItemShort}
                onPress={Delete}>
            <View style={WallStyle.AppointmentIcon}>
                <View style={WallStyle.Icon}>
                    <FontAwesome5 name="user-times" size={40} color={color.hard_1} />
                </View>
            </View>
            <View style={WallStyle.AppointmentInfo}>
                <View style={WallStyle.AppointmentContent}>
                <View style={WallStyle.AppointmentViewMain}>
                        <Text style={WallStyle.AppointmentTextMain}>
                            { "Cita Rechasada"}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};