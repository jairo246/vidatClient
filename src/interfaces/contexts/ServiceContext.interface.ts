import { ReactNode } from "react";

export type HoursFreeType = {
    start: string;
    end: string;
}
export type OfficeHoursType = {
    day: string;
    hoursFree: Array<HoursFreeType>
}
type PropertiesServiceType = {
    photos: Array<string>
    specialty: string;
    location: string;
    address: string;
    officeHours: Array<OfficeHoursType>
}
type PropertiesProvider = {
    profession: string;
    position: string;
    photo: string;
}
export type ProviderType = {
    id: number;
    name: string;
    rut: string;
    nationality: string;
    birthday: Date;
    email: string;
    phone: string;
    address: string;
    password: string;
    properties: PropertiesProvider;
    type: string;
}
export type ServiceType = {
    currency: string;
    description: string;
    id: number;
    properties: PropertiesServiceType;
    provider: ProviderType;
    providerId: number;
    title: string;
    unitCost: number;
}
export type ServiceItemType = {
    currency: string,
    description: string,
    id: number,
    properties: PropertiesServiceType,
    providerId: number,
    title: string,
    unitCost: number,
}
export type Blocktype ={
    left: string;
    center: string;
    right: string;
}
export type ServiceInfoType = {
    currency: string,
    description: string,
    photo: string
    id: number,
    location: string,
    title: string,
    specialty: string,
    daysJob: Array<string>,
    provider: ProviderType;
    providerId: number;
    unitCost: number,
    images: Array<Blocktype>
    officeHours: Array<OfficeHoursType>
}
export type ServiceContextMethod = {
    services: Array<ServiceItemType>;
    serviceInfo: ServiceInfoType;
    result(data:Array<ServiceItemType>): void
    showService(service: ServiceType): void;
};
export const providerDefault:ProviderType = {
    id: -1,
    name: "",
    rut: "",
    nationality: "",
    birthday: new Date(),
    email: "",
    phone: "",
    address: "",
    password: "",
    properties: {
        profession: "",
        position: "",
        photo: "",
    },
    type: "",
};
export const serviceInfoDefault:ServiceInfoType = {
    currency: "",
    description: "",
    id: -1,
    images: [],
    photo: "",
    daysJob: [],
    specialty: "",
    location: "",
    provider: providerDefault,
    providerId: -1, 
    title: "",
    unitCost: -1,
    officeHours: [
        {
            day:"Monday",
            hoursFree:[]
        },
        {
            day:"Tuesday",
            hoursFree:[]
        },
        {
            day:"Wednesday",
            hoursFree:[]
        },
        {
            day:"Thursday",
            hoursFree:[]
        },
        {
            day:"Friday",
            hoursFree:[]
        },
        {
            day:"Saturday",
            hoursFree:[]
        },
        {
            day:"Sunday",
            hoursFree:[]
        },
    ]
}
export const serviceContextDefaultValues: ServiceContextMethod = {
    services: [],
    serviceInfo: serviceInfoDefault,
    result(data) {},
    showService(service) {}
};
export type ServiceContextChildren = {
    children: ReactNode;
};