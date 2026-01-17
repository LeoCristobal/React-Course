import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FetchDataEffect = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
            );

            const data = await response.json();
            if (data && data.length) setData(data);
        }
        getData();
    });

    return (
        <>
            <section>
                {data.map((data) => (
                    <div key={data.id}>
                        <h1>Title: {data.title}</h1>
                        <ul>
                            <h3>Body: {data.body}</h3>
                        </ul>
                    </div>
                ))}
            </section>
        </>
    );
};

export default FetchDataEffect;
