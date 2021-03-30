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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      filtered: true,
    });
    this.filteredSearch();
  };

  componentDidMount() {
    API.searchEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  filteredSearch = () => {
    let { search, employees } = this.state;
    let filteredEmployees = employees.filter(value => {
      return (
        value.name.first.toLowerCase().includes(search.toLowerCase()) ||
        value.name.last.toLowerCase().includes(search.toLowerCase()) ||
        value.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    this.setState({ filteredEmployees });
  };

  render() {
    return (
      <div>
        <Header />
        <Search onChange={this.handleInputChange} value={this.state.search} />
        {!this.state.filtered ? (
          <Table
            tableRow={this.state.employees.map(employee => (
              <Row
                image={
                  <img
                    src={employee.picture.thumbnail}
                    alt={`${employee.name.first} ${employee.name.last}`}
                  />
                }
                name={`${employee.name.first} ${employee.name.last}`}
                phone={employee.cell}
                email={employee.email}
                key={employee.id.value}
                dob={employee.dob.date}
              />
            ))}
          />
        ) : (
          <Table
            tableRow={this.state.filteredEmployees.map(employee => (
              <Row
                image={
                  <img
                    src={employee.picture.thumbnail}
                    alt={`${employee.name.first} ${employee.name.last}`}
                  />
                }
                name={`${employee.name.first} ${employee.name.last}`}
                phone={employee.cell}
                email={employee.email}
                dob={employee.dob.date}
                key={employee.id.value}
              />
            ))}
          />
        )}
      </div>
    );
  }
}

export default Main;
