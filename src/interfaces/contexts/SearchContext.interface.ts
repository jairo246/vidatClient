import { ReactNode } from "react";

type ItemType = {
    name: string
    color: string
}

type specialtiesListCategoryType = {

    category: string
    specialties: Array<Array<ItemType>>
}

export type SearchContextType = {
    currentPosition: number
    labels: Array<string>
    location: string;
    category: string
    categoryList: Array<Array<ItemType>>
    specialtyesChoose: specialtiesListCategoryType
    specialtiesList: Array<specialtiesListCategoryType>
}

export type SearchContextMethod = {
    search: SearchContextType;
    setSearch(services: SearchContextType): void;
    setLocation(location: string): void;
    setCurrentPosition(currentPosition:number): void;
    choose(category_: string): void;
};

export const initialState:SearchContextType = {
    currentPosition: 0,
    labels: ["Categoria","Especialidad","Resultado","Información", "Horarios"],
    location: "",
    category: "",
    categoryList: [
                [
                    {
                        name: "Cirugia",
                        color: "#5F9EA0"
                    },
                    {
                        name: "Medicina",
                        color: "#FF7F50"
                    },
                ],
                [
                    {
                        name: "Clinica",
                        color: "#483D8B"
                    }
                ]
    ],
    specialtyesChoose: {category: "", specialties: []},
    specialtiesList: [
        {
        category: "Cirugia",
        specialties:[
                [
                    {
                        name: "Cirugía de Tórax",
                        color: "#EE82EE"
                    },
                    {
                        name: "Cirugía General",
                        color: "#B0E0E6"
                    }
                ],
                [
                    {
                        name: "Cirugía Cardiovascular",
                        color: "#FFC0CB"
                    }
                ]
              ],
        },
        {
            category: "Medicina",
            specialties:[
                [
                    {
                        name:  "Medicina Interna",
                        color: "#00BFFF"
                    },
                    {
                        name: "Medicina intensiva",
                        color: "#808080"
                    }
                ],
                [
                    {
                        name: "Medicina Familiar",
                        color: "#90EE90"
                    }
                ]
              ],
        },
        {
            category: "Clinica", 
            specialties:[
                [
                    {
                        name: "Farmacia Clínica",
                        color: "#E9967A"
                    },
                    {
                        name: "Genética Clínica",
                        color: "#66CDAA"
                    }
                ],
                [
                    {
                        name: "Laboratorio Clínico",
                        color: "#008080"
                    }
                ]
              ]
        }
    ]
};

export const searchContextDefaultValues: SearchContextMethod = {
    search: initialState,
    setSearch(search) {},
    setLocation(location) {},
    setCurrentPosition(currentPosition) {},
    choose(category_) {}
};

export type Search = {
    children: ReactNode;
};