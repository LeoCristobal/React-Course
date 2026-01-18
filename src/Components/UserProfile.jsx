import { useContext } from "react";
import { Data } from "./UserContext";
const UserProfile = () => {
    let { user } = useContext(Data);

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
        </div>
    );
};

export default UserProfile;
