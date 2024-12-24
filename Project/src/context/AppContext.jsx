import { createContext, useState } from "react";
import { products } from "../assets/assets";


export const AppContext = createContext();

const AppContextProvider = ({children})=>{ 

    const [cartProducts,setCartProducts]  = useState([]);
    const [orderedProduct,setOrderedProducts] = useState([]);
    const [sortType,setSortType]  = useState("Relevance");
    const [sideNavbarVisible, setSideNavbarVisible] = useState(false);

    const value = {
        products,
        cartProducts,
        setCartProducts,
        orderedProduct,
        setOrderedProducts,
        sortType,
        setSortType,
        sideNavbarVisible,
        setSideNavbarVisible        
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;