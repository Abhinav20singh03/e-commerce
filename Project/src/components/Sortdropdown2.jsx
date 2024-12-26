import React, { useContext, useState } from "react";
import "./Sortdropdown2.css";
import { AppContext } from "../context/AppContext";
const Sortdropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {sortType,setSortType} = useContext(AppContext);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const sortClickHandler = (event)=>{
    setSortType(event.target.name);
  }
  const closeDropdown = (e) => {
    if (!e.target.closest(".sort-dropdown2-container")) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="sort-dropdown2-container">
      <button className="sort-dropdown2-button" onClick={toggleDropdown}>Sort Options</button>
      <div className={`sort-dropdown2-content ${isOpen ? "sort-dropdown-show" : ""}`}>
        <button onClick={sortClickHandler} name="High to Low" className="sort-dropdown2-item">High to Low</button>
        <button onClick={sortClickHandler} name="Low to High" className="sort-dropdown2-item">Low to High</button>
        <button onClick={sortClickHandler} name="Relevance" className="sort-dropdown2-item">Relevance</button>
      </div>
    </div>
  );
};

export default Sortdropdown2;
