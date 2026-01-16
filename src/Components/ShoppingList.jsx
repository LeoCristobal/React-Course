import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const ShoppingList = () => {
    let [item, setItem] = useState("");
    let [quantity, setQuantity] = useState();
    let [cart, setCart] = useState(() => {
        let saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const AddToCart = () => {
        if (!item || !quantity || quantity < 0) return;
        setCart([...cart, { item, quantity }]);
        setItem("");
        setQuantity(0);
    };
    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setItem(e.target.value);
                }}
                placeholder="Item"
                value={item}
            />
            <input
                type="number"
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
                placeholder="Quantity: "
                value={quantity}
            />

            <button onClick={AddToCart}>Add to Cart</button>

            <h1>
                <FaCartShopping size={60} />
                Shopping Lists
                {cart.map((cart) => (
                    <ul key={Math.random()}>
                        <h3>{cart.item}</h3>
                        <li>{cart.quantity}</li>
                    </ul>
                ))}
            </h1>
        </>
    );
};

export default ShoppingList;
