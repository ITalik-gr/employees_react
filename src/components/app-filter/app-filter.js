
import { Component } from 'react';
import './app-filter.css';

export const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'Всі бедолаги'},
    {name: 'like', label: 'На підвищення'},
    {name: 'more', label: 'З/П більше 1к$'},
  ]

  const buttons = buttonsData.map(({name, label}) => {
    const active =  props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button onClick={() => props.onFilterSelect(name)} key={name} className={`btn ${clazz}`} type="button">
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
      {/* <button onClick={this.changeFilter} data-filter="all" className="btn btn-light" type="button">
        Всі бедолаги
      </button>

      <button onClick={this.changeFilter} data-filter="increase" className="btn btn-outline-light" type="button">
        На підвищення
      </button>

      <button onClick={this.changeFilter} data-filter="more" className="btn btn-outline-light" type="button">
        З/П більше 1к$
      </button> */}
    </div>
  )
}