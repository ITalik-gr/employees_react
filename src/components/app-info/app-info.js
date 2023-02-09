import './app-info.css';

const AppInfo = ({increased, employees}) => {
  return (
    <div className="app-info">
      <h1>Облік співробітників у компанії Monesis</h1>
      <h2>Скільки всього роботяг: {employees} </h2>
      <h2>Премію отримають: {increased}</h2>
    </div>
  )
}

export default AppInfo;