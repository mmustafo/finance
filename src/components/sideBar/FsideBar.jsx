import { Link } from "react-router-dom"
import style from"./SideBar.module.scss"

function FsideBar() {
  return (
    <header className={style.FsideBar}>
      <nav className={style.Fnav}>
        <Link to="/" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img className={style.Fnav__item__img} src="../public/image/icon-nav-overview.svg" alt="Home page" />
            <Link to="/" className={style.Fnav__item__link}>Overview</Link>
          </div>
        </Link>

        <Link to="/transactions" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img className={style.Fnav__item__img} src="../public/image/icon-nav-transactions.svg" alt="Transactions page" />
            <Link to="/transactions" className={style.Fnav__item__link}>Transactions</Link>
          </div>
        </Link>

        <Link to="/budgets" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img className={style.Fnav__item__img} src="../public/image/icon-nav-budgets.svg" alt="Budgets page" />
            <Link to="/budgets" className={style.Fnav__item__link}>Budgets</Link>
          </div>
        </Link>

        <Link to="/posts" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img className={style.Fnav__item__img} src="../public/image/icon-nav-pots.svg" alt="Pots page" />
            <Link to="/posts" className={style.Fnav__item__link}>Pots</Link>
          </div>
        </Link>

        <Link to="/recurringBils" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img className={style.Fnav__item__img} src="../public/image/icon-recurring-bills.svg" alt="Recurring bills page" />
            <Link to="/recurringBils" className={style.Fnav__item__link}>Recurring </Link>
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default FsideBar