import { createContext, useContext, useState } from "react";

import { ScheduleContextMethod, schedulesContextDefaultValues } from "../interfaces/contexts/ScheduleContext.interface";
import { ScheduleContextChildren, PropertiesSchedulesDateType } from "../interfaces/contexts/scheduleContext.interface";
import { ContractType, ServiceType, SchedulesType,  ScheduleItem, scheduleDefault } from "../interfaces/contexts/ScheduleContext.interface";
import { SchedulesDefault } from "../interfaces/contexts/ScheduleContext.interface";
import { NewSchedulesType, newSchedulesDefault } from "../interfaces/contexts/ScheduleContext.interface";
import { ServiceInfoType } from "../interfaces/contexts/ServiceContext.interface";

export const ScheduleContext = createContext<ScheduleContextMethod>(schedulesContextDefaultValues);

export const useSchedule = () => useContext(ScheduleContext);

export const ScheduleProvider = ({ children }: ScheduleContextChildren) => {

    const [newSchedule, setNewSchedule] = useState<NewSchedulesType>(newSchedulesDefault)
    const [schedule, setSchedule] = useState<ScheduleItem>(scheduleDefault);
    const [schedulesClient, setSchedulesClient] = useState<Array<ScheduleItem>>([]);
    const [schedulesProvider, setSchedulesProvider] = useState<Array<ScheduleItem>>([]);

    const setInfoSchedule = (serviceInfo:ServiceInfoType) => {
        
        setNewSchedule({...newSchedule,
            description: serviceInfo != undefined ? serviceInfo.title : "",
            payment: serviceInfo.currency,
            place: serviceInfo.location,
            unitCost: serviceInfo.unitCost,
            serviceId: serviceInfo != undefined ? serviceInfo.id : 0,
            state: "SENT"     
        })
    }
    const setChooseHour = (hour: PropertiesSchedulesDateType) => {
        
        setNewSchedule({...newSchedule,
            dayle: hour,
            amount: newSchedule.unitCost* (hour.end.getTime() - hour.start.getTime())/3600000
            })
    
    }
    const updateClient = (data:Array<ContractType>) => {

        const schedules:Array<ScheduleItem> = data.map((contract:ContractType) => {

            const appointment = contract.schedules.length != 0 ? contract.schedules[0] : SchedulesDefault;

            return{
                amount: contract.amount,
                contractId: contract.id,
                dayle: appointment.properties,
                description: contract.description,
                id: appointment.id,
                payment: contract.payment,
                place: contract.place,
                state: appointment.state
            }
        })
        schedules.sort((a, b) => {
            if(a.state == "SENT"){
                     if(b.state == "ACCEPT")    return  1
                else if(b.state == "CONFIRM")   return -1
                else if(b.state == "DONE")      return -1
                else if(b.state == "REJECT")    return -1
                else                            return  0
            }
            else if(a.state == "ACCEPT"){
                     if(b.state == "SENT")      return -1
                else if(b.state == "CONFIRM")   return -1
                else if(b.state == "DONE")      return -1
                else if(b.state == "REJECT")    return -1
                else                            return  0
            }
            else if(a.state == "CONFIRM"){
                     if(b.state == "SENT")      return  1
                else if(b.state == "ACCEPT")    return  1
                else if(b.state == "DONE")      return -1
                else if(b.state == "REJECT")    return -1
                else                            return  0
            }
            else if(a.state == "DONE"){
                     if(b.state == "SENT")      return  1
                else if(b.state == "ACCEPT")    return  1
                else if(b.state == "CONFIRM")   return  1
                else if(b.state == "REJECT")    return -1
                else                            return  0
            }
            else{ /* a.state == "REJECT" */
                     if(b.state == "SENT")      return  1
                else if(b.state == "ACCEPT")    return  1
                else if(b.state == "CONFIRM")   return  1
                else if(b.state == "REJECT")    return  1
                else                            return  0
            }
        }); 
        setSchedulesClient(schedules)
    }
    const updateProvider = (data:Array<ServiceType>) => {

        const dataFilter:Array<ServiceType> = data.filter((service:ServiceType) => service.schedules.length != 0)
        const ScheduleList:Array<SchedulesType> = dataFilter.reduce((all:Array<SchedulesType>,service:ServiceType) => [...all,...service.schedules] ,[])

        const schedules:Array<ScheduleItem> =  ScheduleList.map((schedule:SchedulesType) => {

            return{
                amount: -1,
                contractId: -1,
                dayle: schedule.properties,
                description: "",
                id: schedule.id,
                payment: "",
                place: "",
                state: schedule.state,
            }
        })

        setSchedulesProvider(schedules) 
    }
    const showSchedule = (id: number) => {


    }
    const value = {
        newSchedule,
        schedule,
        schedulesClient,
        schedulesProvider,
        setInfoSchedule,
        setChooseHour,
        updateClient,
        updateProvider,
        showSchedule
    };

    return (
        <ScheduleContext.Provider value={value}>
            {children}
        </ScheduleContext.Provider>
    );
}