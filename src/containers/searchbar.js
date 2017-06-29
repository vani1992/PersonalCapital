import React, { Component } from "react";

const  SearchBar =  (props) => {
    return (
        <input
          placeholder="Search for financial institutues"
          className="form-control"
          onChange={(e) => {
            if(e.target.value.length > 2 || e.target.value === '')
            {
              props.getFinancialInstitutes(e.target.value);
            }
          }}
        />
     );
}

export default SearchBar;