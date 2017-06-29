
 import React from "react";

 const FinancialInstitutes = (props) => {

  const renderInstitutes = (institute) => {
    const name = institute.name;
    const url = institute.url;
    const type = institute.type;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{url}</td>
        <td>{type}</td>
      </tr>
    );
  }

  
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Institute Name</th>
            <th>Reference</th>
            <th>Institute Type</th>
            </tr>
        </thead>
        <tbody>
          {props.filteredInstitutes.map(renderInstitutes)}
        </tbody>
      </table>
    );
  
}

export default FinancialInstitutes;