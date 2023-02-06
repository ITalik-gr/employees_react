
import './app.css';
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import {SearchPanel} from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';
import { render } from '@testing-library/react';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Kirillo Budanov', salary: "2800$", increase: false, id: 1}, 
        {name: 'Vitalii Hrytsenko', salary: "600$", increase: true, id: 2},
        {name: 'Prodan Anastasiya', salary: "1300$", increase: false, id: 3},
      ]
    }
    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id == id) // elem - кожен обєкт, перевіряє, чи його id такий як і тей на який ми клікнули
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    // const newItem = {name, salary, increase: false, id: this.maxId++} // 
    const newItem = {
        name, 
        salary,
        increase: false,
        id: this.maxId++
    }

    // this.setState(({data}) => {
    //   const newArr = [...data, ...newItem];
    //   return {
    //     data: newArr
    //   }
    // });

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
          data: newArr
      }
    });
  }

//   addItem = (name, salary) => {
//     const newItem = {
//         name, 
//         salary,
//         increase: false,
//         id: this.maxId++
//     }
//     this.setState(({data}) => {
//         const newArr = [...data, newItem];
//         return {
//             data: newArr
//         }
//     });
// }

  render() {
   
    return (
      <div className="app">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <EmployeesList onDelete={this.deleteItem} data={this.state.data} />
          <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App;