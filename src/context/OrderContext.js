import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [order, setOrder] = useState([]);

    function addMealToOrder(meal) {
    setOrder(currentData => [...currentData, meal]);
}

function getTotalPrice(){
    const totalPrice = order.reduce((accumaltor, meal) => accumaltor + meal.price, 0)
    return totalPrice;
}

return (
    <OrderContext.Provider value={{cart, addMealToOrder}}>
        {children}
    </OrderContext.Provider>
)
}

export function useOrder(){
    return useContext(OrderContext);
}
