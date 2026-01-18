import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Data } from "./UserContext";

const UserUpdate = () => {
    const { updateUser } = useContext(Data);
    let [newName, setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName.trim()) {
            updateUser(newName);
            setNewName("");
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter your new name"
                />
                <button type="submit">Update</button>
            </form>
        </>
    );
};

export default UserUpdate;
