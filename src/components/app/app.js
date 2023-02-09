
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
        {name: 'Kirillo Budanov', salary: "2800$", increase: false, like: true, id: 1}, 
        {name: 'Vitalii Hrytsenko', salary: "600$", increase: true, like: false, id: 2},
        {name: 'Prodan Anastasiya', salary: "1300$", increase: false, like: false, id: 3},
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
      const newItem = {
        name, 
        salary,
        increase: false,
        like: false,
        id: this.maxId++
      }
      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
      });
    }

  onToggleProp = (id, prop) => { 
    this.setState(({data}) => ({
      data: data.map(item => {  // перебираю всі обєкти в масиві данних і якщо id співпали, то
        if(item.id === id) { // оцей обєкт я зманіюю новим, якиий в собі содержить цей же самиий старий, але increase замінений на обратне
          return {...item, [prop]: !item[prop]} // ...item це той обєкт, ми його розвертаємо і записуємо в новий, а другим ми в айтемі заміняємо increase на протилежний. Воно перезаписує
        }
        return item; // якщо це не тей який нам треба масив, то його назад повертаємо (залишаємо як є)
      })
    }))
  }


  render() {

    let employees = this.state.data.length;
    let increased = this.state.data.filter(item => item.increase).length;

    return (
      <div className="app">
          <AppInfo employees={employees} increased={increased} />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <EmployeesList 
            onToggleProp={this.onToggleProp} 
            onDelete={this.deleteItem} 
            data={this.state.data} />
          <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App;