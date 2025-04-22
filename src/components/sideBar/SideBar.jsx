import { Link } from "react-router-dom";
import style from "./SideBar.module.scss";

function SideBar() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.nav__link}>
          <img
            className={style.nav__item__imge}
            src="/image/logo-large.svg"
            alt="Logo"
          />
          <Link to="/" className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="/image/icon-nav-overview.svg"
              alt="Overview icon"
            />
            <span className={style.nav__link_h4}>Overview</span>
          </Link>
        </div>

        <Link to="/transactions" className={style.nav__link}>
          <div className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="/image/icon-nav-transactions.svg"
              alt="Transactions icon"
            />
            <span className={style.nav__link_h4}>Transactions</span>
          </div>
        </Link>

        <Link to="/budgets" className={style.nav__link}>
          <div className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="/image/icon-nav-budgets.svg"
              alt="Budgets icon"
            />
            <span className={style.nav__link_h4}>Budgets</span>
          </div>
        </Link>

        <Link to="/posts" className={style.nav__link}>
          <div className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="/image/icon-nav-pots.svg"
              alt="Posts icon"
            />
            <span className={style.nav__link_h4}>Pots</span>
          </div>
        </Link>

        <Link to="/recurringBills" className={style.nav__link}>
          <div className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="/image/icon-nav-recurring-bills.svg"
              alt="Recurring bills icon"
            />
            <span className={style.nav__link_h4}>Recurring bills</span>
          </div>
        </Link>

        <img
          className={style.nav__item__footer__img}
          src="/image/icon-minimize-menu.svg"
          alt="Minimize menu icon"
        />
      </nav>
    </header>
  );
}

export default SideBar;
