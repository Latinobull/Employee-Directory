import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import API from '../utils/API';

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

  componentDidMount() {
    API.search().then(res => {
      this.setState({ employees: res.data.results });
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Search onChange={this.handleInputChange} value={this.state.search} />
        <Table />
      </div>
    );
  }
}

export default Main;
