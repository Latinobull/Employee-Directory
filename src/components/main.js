import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import Row from './Row';
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
        <Table
          tableRow={this.state.employees.map(employee => (
            <Row
              image={
                <img
                  src={employee.picture.thumbnail}
                  alt={`${employee.name.first} ${employee.name.last}`}
                />
              }
            />
          ))}
        />
      </div>
    );
  }
}

export default Main;
