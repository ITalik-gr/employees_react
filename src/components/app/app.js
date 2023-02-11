
import './app.css';
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import {SearchPanel} from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Kirillo Budanov', salary: "2800", increase: false, like: true, id: 1}, 
        {name: 'Vitalii Hrytsenko', salary: "600", increase: true, like: false, id: 2},
        {name: 'Prodan Anastasiya', salary: "1300", increase: false, like: false, id: 3},
      ],
      term: '',
      filter: 'all',
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

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1; // пробігаємось по імменам і шукаємо в строкі такі букви (підряд). воно возвращає індекс. а якщо не знайшло то -1, тому і переввірка на -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case 'like': 
        return items.filter(item => item.like);
        break;
      case 'more': 
        return items.filter(item => item.salary >= 1000);
        break;
      default: 
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {term, data, filter} = this.state;
    let employees = this.state.data.length;
    let increased = this.state.data.filter(item => item.increase).length;
    let visibbleData =  this.filterPost(this.searchEmp(data, term), filter); // на сторінку передаються лише ті, що пройшли фукнц. А якщо нічого нема то воно повертає тей же масив

    return (
      <div className="app">
          <AppInfo employees={employees} increased={increased} />
          <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch} />
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
          </div>
          <EmployeesList 
            onToggleProp={this.onToggleProp} 
            onDelete={this.deleteItem} 
            data={visibbleData} />
          <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App;