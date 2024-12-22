import { createContext, useState } from "react";
import { products } from "../assets/assets";


export const AppContext = createContext();

const AppContextProvider = ({children})=>{ 

    const [cartProducts,setCartProducts]  = useState([]);
    const [orderedProduct,setOrderedProducts] = useState([]);
    
    const value = {
        products,
        cartProducts,
        setCartProducts,
        orderedProduct,
        setOrderedProducts
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;