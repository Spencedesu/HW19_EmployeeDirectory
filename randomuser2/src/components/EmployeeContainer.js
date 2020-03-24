import React, { Component } from "react";
import TableBody from "./TableBody";
import SearchForm from "./SearchForm";
import API from "../utils/API";
 
class EmployeeContainer extends Component {
  state = {
    result = {},
    search: ""
  };

  componentDidMount() {
    this.searchEmployees("");
    console.log("loading first time");
  }
  handleInputChange = event => {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  renderPage = () => {
    if(this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.
        {this.renderPage()}
      </div>
    );
  }
}
export default EmployeeContainer;