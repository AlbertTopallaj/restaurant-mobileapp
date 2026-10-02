import { createContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [order, setOrder] = useState([]);

    function addMealToOrder(meal) {
    setOrder(currentData => [...currentData, meal]);
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
