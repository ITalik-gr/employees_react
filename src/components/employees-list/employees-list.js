import { EmployeesListItem } from "../employees-list-item/employees-list-item"
import './employees-list.css'

export const EmployeesList = ({data, onDelete}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item
    return(
      <EmployeesListItem 
        onDelete={() => onDelete(id)}
        key={id} {...itemProps} />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}