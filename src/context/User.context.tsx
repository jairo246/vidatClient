import { createContext, useContext, useState } from "react";

import { UserItem, initialUserItem } from "../interfaces/contexts/UserContext.interface";
import {
    UserContextMethod,
    userContextDefaultValues,
    UserContextChildren } from "../interfaces/contexts/UserContext.interface";

import { urlGetUserData } from "../interfaces/contexts/UserContext.interface";
import { RequestGetUserData } from "../requests/Clients.requests";

export const UserContext = createContext<UserContextMethod>(userContextDefaultValues);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: UserContextChildren) => {
    const [user, setUser] = useState<UserItem>(initialUserItem);

    const userUpdate = async (jwt:string) => {
        if(jwt != ""){
            fetch(urlGetUserData, RequestGetUserData(jwt))
                .then(res => res.json())
                .then(res => {
                    setUser(res.data)
                })
                .catch(error => console.log(error))
        }
        else {
            setUser(initialUserItem)
        }
    };

    const value = {
        user,
        userUpdate
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}