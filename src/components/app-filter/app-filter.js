import './app-filter.css';

export const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Всі бедолаги
      </button>

      <button className="btn btn-outline-light" type="button">
        На підвищення
      </button>

      <button className="btn btn-outline-light" type="button">
        З/П більше 1к$
      </button>
    </div>
  )
}