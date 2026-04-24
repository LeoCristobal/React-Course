import React from "react";
import { createContext } from "react";
import Reciever from "./components/Reciever";

export const ItemPortal = createContext();

const items = { food: "Pizza", quantity: 2 };
const App = () => {
  return (
    <ItemPortal.Provider value={items}>
      <Reciever />
    </ItemPortal.Provider>
  );
};

export default App;
