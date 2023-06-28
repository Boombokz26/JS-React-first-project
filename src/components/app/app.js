// App.js

import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: true, id: 1, like: true },
        { name: 'Alex M.', salary: 3000, increase: false, id: 2, like: false },
        { name: 'Carl W.', salary: 15000, increase: false, id: 3, like: false },
        { name: 'Carl W.', salary: 15000, increase: true, id: 4, like: false }
      ]
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id)
    }));
  };

  addEmployee = (newEmployee) => {
    const { data } = this.state;
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const employee = { ...newEmployee, id };
    this.setState(prevState => ({
      data: [...prevState.data, employee]
    }));
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
