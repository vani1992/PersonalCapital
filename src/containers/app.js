import React, { Component } from 'react';
import { connect } from "react-redux";

import SearchBar from '../components/searchbar';
import FinancialInstitues from '../components/financialInstitutes';
import { fetchInstitutes } from '../actions/index';
import _ from "lodash";

class App extends Component {

  constructor(props) {
  	super(props);
	this.state = {filteredInstitutes: []};
	this.getFinancialInstitutes = this.getFinancialInstitutes.bind(this);
  }	

  componentWillMount() {
  	this.props.fetchInstitutes();
  }	

  
  getFinancialInstitutes(name) {
	let filteredInstitutes = [];
	if(name != '') {
		 filteredInstitutes = this.props.institutes.filter((institute) => {
			return institute.name.toLowerCase().includes(name.toLowerCase());
		});
  }
  this.setState({filteredInstitutes});
  }

  render() {
  	const instituteSearch = _.debounce(name => {
      this.getFinancialInstitutes(name);
    }, 300);
    return (
      <div>
      <SearchBar getFinancialInstitutes={instituteSearch}/>
      <FinancialInstitues filteredInstitutes={this.state.filteredInstitutes}/>
      </div>
    );
  }

}

function mapStateToProps({ institutes }) {
  return { institutes };
}

export default connect(mapStateToProps, { fetchInstitutes })( App );