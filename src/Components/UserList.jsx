import React from "react";

const ProductInfo = () => {
    const users = [
        { id: 1, name: "Leo", age: 15 },
        { id: 2, name: "Kyle", age: 16 },
        { id: 3, name: "Enzo", age: 16 },
        { id: 4, name: "Stephen", age: 16 },
        { id: 5, name: "Grath", age: 16 },
    ];

    return (
        <>
            {users.map((user) => (
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                </ul>
            ))}
        </>
    );
};

export default ProductInfo;
