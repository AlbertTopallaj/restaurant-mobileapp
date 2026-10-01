import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [ meals, setMeals ] = useState([]);
}

function addMeal(meal) {
    setMeals(prev => [...prev, meal]);
}

function removeMeal(index) {
    setMeals(prev => prev.filter((_, i) => i !==index));
}