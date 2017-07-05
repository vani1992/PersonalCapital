
 import React from "react";

 const FinancialInstitutes = (props) => {

  const renderInstitutes = (institute) => {
    const name = institute.name;
    const url = institute.url;

    return (
      <li className="list-group-item" key={name} onClick={() => props.onInstituteSelect(name)
      }>
        <p>{name}</p>
        <span>{url}</span>
      </li>
    );
  }

  
    return (
      <ul className="list-group">
          {props.showPopUp && props.filteredInstitutes.map(renderInstitutes)}
      </ul>
    );
  
}

export default FinancialInstitutes;