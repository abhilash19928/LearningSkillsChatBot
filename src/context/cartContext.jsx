import { createContext, useContext, useState } from "react";

const cartContext = createContext();


export function CartProvider({ children }) {

    const [items, setItems] = useState([])

    const addToCart = (product) => {
        setItems(prevItems => [...prevItems, product]);
    }
    const removeItem=(productId)=>{
        setItems(prevItems=>prevItems.filter(item=>item.id!==productId));
    }
    const totalItems = items?items.length:0;
    return (
        <cartContext.Provider value={{ items, addToCart, removeItem, totalItems }}>
            {children}
        </cartContext.Provider>  
    )


}
export function useCart() {
    return useContext(cartContext);
}