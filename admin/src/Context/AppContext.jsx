import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sideNavbarVisible, setSideNavbarVisible] = useState(false);
    const [token,setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"");
  const [products,setProducts] = useState([]);
  const value = {
    products,
    setProducts,
    sideNavbarVisible,
    setSideNavbarVisible,
    token,setToken
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
