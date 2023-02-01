
import './app.css';
import AppInfo from '../app-info/app-info';
import {SearchPanel} from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';



function App() {

  const data = [
    {name: 'Kirillo Budanov', salary: "2800$", increase: false}, 
    {name: 'Vitalii Hrytsenko', salary: "600$", increase: true},
    {name: 'Anastasia Karpenko', salary: "1300$", increase: false},
  ]

  return (
    <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} />
        <EmployeesAddForm/>
    </div>
  )
}

export default App;