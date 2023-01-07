import { createContext, useContext, useState } from "react";
import { dayWeek } from "../constants/days";

import { ServiceContextChildren } from "../interfaces/contexts/ServiceContext.interface";
import {serviceContextDefaultValues, ServiceContextMethod, OfficeHoursType } from "../interfaces/contexts/ServiceContext.interface";
import { Blocktype, serviceInfoDefault, ServiceInfoType, ServiceItemType, ServiceType } from "../interfaces/contexts/ServiceContext.interface";
// @ts-ignore

export const ServiceContext = createContext<ServiceContextMethod>(serviceContextDefaultValues);

export const useService = () => useContext(ServiceContext);

export const ServiceProvider = ({ children }: ServiceContextChildren) => {

    const [services, setServices] = useState<Array<ServiceItemType>>([]);
    const [serviceInfo, setServiceInfo] = useState<ServiceInfoType>(serviceInfoDefault);

    const result = (data:Array<ServiceItemType>) => setServices(data)

    const showService = (service: ServiceType) => {

        const photos = service.properties.photos
        let photo_ = ""
        let images_:Array<Blocktype> = []

        if(photos.length == 1) photo_ = photos[0]
        else if(photos.length > 1){

            photo_ = photos[0]
            let listPhoto = [...photos];
            listPhoto.shift()
            const list = listPhoto.length % 3 == 1 ? [...listPhoto, "", ""] : listPhoto.length % 3 == 2 ? [...listPhoto, ""] : listPhoto

            // @ts-ignore
            images_ = list.reduce((rows, key, index) => (index % 3 == 0 ? rows.push([key]): rows[rows.length-1].push(key)) && rows, []
                ).map((list:Array<string>) => {

                    return{
                        left: list[0],
                        center: list[1],
                        right: list[2]
                    }
                });
        }
        const daysJob_:Array<string> = service.properties.officeHours.reduce((days:Array<string>,officeHour:OfficeHoursType,index:number) => {

            if(officeHour.hoursFree.length == 0)    return [...days]
            else                                    return [...days,dayWeek[index]]
        },[])
        const serviceChoose:ServiceInfoType ={
                id: service.id,
                photo: photo_,
                title: service.title,
                description: service.description,
                currency: service.currency,
                unitCost: service.unitCost,
                images: images_,
                specialty: service.properties.specialty,
                location: service.properties.location,
                officeHours: service.properties.officeHours,
                providerId: service.providerId,
                provider: service.provider,
                daysJob: daysJob_
            }

        setServiceInfo(serviceChoose)
    }
    const value = {
        services,
        serviceInfo,
        result,
        showService
    };
    return (
        <ServiceContext.Provider value={value}>
            {children}
        </ServiceContext.Provider>
    );
}