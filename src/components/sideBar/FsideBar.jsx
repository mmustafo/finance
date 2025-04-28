import { Link } from "react-router-dom";
import style from "./SideBar.module.scss";

function FsideBar() {
  return (
    <header className={`fsidebar ${style.FsideBar}`}>
      <nav className={style.Fnav}>
        <Link to="/" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img
              className={style.Fnav__item__img}
              src="/image/icon-nav-overview.svg"
              alt="Home page"
            />
            <span className={style.Fnav__item__link}>Overview</span>
          </div>
        </Link>

        <Link to="/transactions" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img
              className={style.Fnav__item__img}
              src="/image/icon-nav-transactions.svg"
              alt="Transactions page"
            />
            <span className={style.Fnav__item__link}>Transactions</span>
          </div>
        </Link>

        <Link to="/budgets" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img
              className={style.Fnav__item__img}
              src="/image/icon-nav-budgets.svg"
              alt="Budgets page"
            />
            <span className={style.Fnav__item__link}>Budgets</span>
          </div>
        </Link>

        <Link to="/posts" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img
              className={style.Fnav__item__img}
              src="/image/icon-nav-pots.svg"
              alt="Pots page"
            />
            <span className={style.Fnav__item__link}>Pots</span>
          </div>
        </Link>

        <Link to="/recurringBills" className={style.Fnav__items}>
          <div className={style.Fnav__item}>
            <img
              className={style.Fnav__item__img}
              src="/image/icon-recurring-bills.svg"
              alt="Recurring bills page"
            />
            <span className={style.Fnav__item__link}>Recurring</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default FsideBar;
