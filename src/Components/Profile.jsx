import { useEffect } from "react";
import { useState } from "react";

const Profile = () => {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [person, setPerson] = useState(() => {
        let saved = localStorage.getItem("person");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("person", JSON.stringify(person));
    }, [person]);

    const handleOnChangeName = (e) => {
        setName(e.target.value);
    };
    const handleOnChangeAge = (e) => {
        setAge(e.target.value);
    };

    const AddProfile = () => {
        if (!name || !age) return;
        setPerson([...person, { name, age }]);
        setName("");
        setAge("");
    };
    return (
        <>
            <input
                type="text"
                onChange={handleOnChangeName}
                placeholder="Name"
                value={name}
            />
            <input
                type="text"
                onChange={handleOnChangeAge}
                placeholder="Age"
                value={age}
            />
            <button onClick={AddProfile}>Add</button>

            <h1>PROFILES:</h1>
            {person.map((person) => (
                <ul key={Math.random()}>
                    <li>{person.name}</li>
                    <li>{person.age}</li>
                </ul>
            ))}
        </>
    );
};

export default Profile;
