import { createContext, useContext, useState } from "react";
import { Search, searchContextDefaultValues, SearchContextMethod, SearchContextType, initialState } from "../interfaces/contexts/SearchContext.interface";
// @ts-ignore

export const SearchContext = createContext<SearchContextMethod>(searchContextDefaultValues);

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: Search) => {

    const [search, setSearch] = useState<SearchContextType>(initialState); 

    const setLocation = (location: string) => setSearch({...search, location: location })
    const setCurrentPosition = (currentPosition:number) => setSearch({...search, currentPosition: currentPosition})

    const choose = (category_: string) => {

        const filter = search.specialtiesList.find((list) => list.category == category_ )

        setSearch({...search, 
            category: category_,
            specialtyesChoose: filter != undefined ? filter : {category: "", specialties: []}
        })
    }
    
    const value = {
        search,
        setSearch,
        setLocation,
        setCurrentPosition,
        choose
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}