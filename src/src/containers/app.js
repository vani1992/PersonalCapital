import React, {Component} from 'react';
import {connect} from "react-redux";

import SearchBar from '../components/searchbar';
import FinancialInstitues from '../components/financialInstitutes';
import {fetchInstitutes} from '../actions/index';
import _ from "lodash";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {filteredInstitutes: [], instituteValue: ''};
  }

  componentWillMount() {
    this.props.fetchInstitutes();
  }


  getFinancialInstitutes(instituteValue) {
    let filteredInstitutes = [];
    if (instituteValue.length > 2) {
      filteredInstitutes = this.props.institutes.filter((institute) => {
        return institute.name.toLowerCase().includes(instituteValue.toLowerCase());
      });
    }
    this.setState({filteredInstitutes});

  }

  render() {
    const instituteSearch = _.debounce(instituteValue => {
      this.getFinancialInstitutes(instituteValue);
    }, 300);
    return (
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <SearchBar onInputChange={(instituteValue, showPopUp) => {
            instituteSearch(instituteValue);
            this.setState({instituteValue, showPopUp});
          }}
             instituteValue={this.state.instituteValue}
          />
          <FinancialInstitues filteredInstitutes={this.state.filteredInstitutes}
                              showPopUp={this.state.showPopUp}
                              onInstituteSelect={(instituteValue) => {
                                this.getFinancialInstitutes(instituteValue);
                                this.setState({instituteValue, showPopUp: false});
                              }}/>
        </div>
      </div>
    );
  }

}

function mapStateToProps({institutes}) {
  return {institutes};
}

export default connect(mapStateToProps, {fetchInstitutes})(App);