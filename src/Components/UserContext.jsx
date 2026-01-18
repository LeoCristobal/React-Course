import { useState } from "react";
import { createContext } from "react";

export const Data = createContext();

const UserContext = ({ children }) => {
    let [user, setUser] = useState({ name: "John Doe" });

    const updateUser = (newName) => {
        setUser({ name: newName });
    };

    return (
        <>
            <Data.Provider value={{ user, updateUser }}>
                {children}
            </Data.Provider>
        </>
    );
};

export default UserContext;
