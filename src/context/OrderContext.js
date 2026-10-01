import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [meals, setMeals ] = useState([]);
}