import UserContext from "./Components/UserContext";
import UserProfile from "./Components/UserProfile";
import UserUpdate from "./Components/UserUpdate";

const App = () => {
    return (
        <>
            <UserContext>
                <UserUpdate />
                <UserProfile />
            </UserContext>
        </>
    );
};

export default App;
