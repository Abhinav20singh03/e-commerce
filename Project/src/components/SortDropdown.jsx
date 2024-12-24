import React, { useContext } from "react";
import "./SortDropdown.css";
import { AppContext } from "../context/AppContext";

const SortDropdown = ({dropdownOptions}) => {
  const {sortType,setSortType} = useContext(AppContext);
  const sortClickHandler = (event)=>{
    setSortType(event.target.name);
  }
  return (
    <div className="sortDropdown">
    Sort By : {sortType}
      <div className="sortDropdown-button"/>
      <div className="sortDropdown-content">
        {
          dropdownOptions.map((ele)=>{
            return <button onClick={sortClickHandler} className="options" name={ele.label} key={ele.id}>{ele.label}</button>
          })
        }
      </div>
    </div>
  );
};

export default SortDropdown;
