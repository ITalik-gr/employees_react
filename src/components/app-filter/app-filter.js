import './app-filter.css';

export const AppFilter = () => {
  return (
    <div className="btn-group">
      <buttont className="btn btn-light" type="button">
        Всі бедолаги
      </buttont>

      <buttont className="btn btn-outline-light" type="button">
        На підвищення
      </buttont>

      <buttont className="btn btn-outline-light" type="button">
        З/П більше 1к$
      </buttont>
    </div>
  )
}