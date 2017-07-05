import React from "react";

const  SearchBar =  (props) => {
    const searchStyle = props.instituteValue !== '' ? 'glyphicon glyphicon-remove-sign' : 'glyphicon glyphicon-search';
    return (
      <div className="form-group">
        <input
          placeholder="Search for financial institutues"
          className="form-control"
          value={props.instituteValue}
          onChange={ e => {
            props.onInputChange(e.target.value,true);
          }}
        />
        <span className={searchStyle} onClick={() => props.onInputChange('',false)}></span>
      </div>
     );
}

export default SearchBar;