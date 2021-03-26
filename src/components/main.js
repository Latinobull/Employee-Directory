import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Table from './Table';

class Main extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: '',
    filtered: false,
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      filtered: true,
    });
    this.filteredSearch();
  };

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Table />
      </div>
    );
  }
}

export default Main;
