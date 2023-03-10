import { Component } from 'react';

import './employees-add-form.css';

export class EmployeesAddForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) {
      alert(`Ви ввели неправильні данні!`);
      return
    };
    this.props.onAdd(this.state.name, this.state.salary)
    this.setState({
      name: '',
      salary: ''
    })
  }
  
  render() {
    const {salary, name} = this.state
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          onSubmit={this.onSubmit}
          className="add-form d-flex">
          <input type="text"
              className="form-control new-post-label"
              name="name"
              placeholder="Как его зовут?" 
              value={name}
              onChange={this.onValueChange} />
          <input type="number"
              className="form-control new-post-label"
              name="salary"
              placeholder="З/П в $?" 
              value={salary}
              onChange={this.onValueChange} />
  
          <button type="submit"
                  className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}