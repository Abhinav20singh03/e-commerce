import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{ 

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [cartProducts,setCartProducts]  = useState([]);
    const [products,setProducts]  = useState([]);
    const [orderedProduct,setOrderedProducts] = useState([]);
    const [sortType,setSortType]  = useState("Relevance");
    const [sideNavbarVisible, setSideNavbarVisible] = useState(false);
    const [loggedIn,setLoggedIn] = useState(false);
    const shipping = 10;
    const value = {
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        orderedProduct,
        setOrderedProducts,
        sortType,
        setSortType,
        sideNavbarVisible,
        setSideNavbarVisible,
        loggedIn,
        setLoggedIn,
        shipping,
        backendUrl
    }

    const getProductData = async()=>{
        try {
            const response = await axios.get(backendUrl+"/api/products/list");
            if(response.data.success){
                setProducts(response.data.products);
                console.log(response.data.products);
            }else{
                toast.error("Response Not Found");
            }
            
        } catch (error) {
            toast.error(error.messsage);
        }
    }
    useEffect(()=>{
        getProductData();
    },[]);


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;