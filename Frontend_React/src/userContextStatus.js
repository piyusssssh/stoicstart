import React, { createContext, useState } from 'react';

export const userStatusContext = createContext();

export const UserStatusProvider = ({ children }) => {
    const [userStatuses, setUserStatuses] = useState({
        Person1: false,
        Person2: false,
    });

    const toggleUserStatus = (name) => {
        setUserStatuses((prevStatuses) => ({
            ...prevStatuses,
            [name]: !prevStatuses[name],
        }));
    };

    return (
        <userStatusContext.Provider value={{ userStatuses, toggleUserStatus }}>
            {children}
        </userStatusContext.Provider>
    );
};
