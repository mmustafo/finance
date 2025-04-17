import { Link } from "react-router-dom";
import style from "./SideBar.module.scss";

function SideBar() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.nav__link}>
        <img className={style.nav__item__imge} src="../public/image/logo-large.svg" alt="" />
          <Link to="/"  className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="../public/image/icon-nav-overview.svg"
              alt=""
            />
            <Link to="/" className={style.nav__link_h4}>Overview</Link>
          </Link>
        </div>

        <Link to="/transactions" className={style.nav__link}>
          <div className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="../public/image/icon-nav-transactions.svg"
              alt=""
            />
            <Link to="/transactions" className={style.nav__link_h4}>Transactions</Link>
          </div>
        </Link>

        <Link to="/budgets" className={style.nav__link}>
          <div className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="../public/image/icon-nav-budgets.svg"
              alt=""
            />
            <Link to="/budgets" className={style.nav__link_h4}>Budgets</Link>
          </div>
        </Link>

        <Link to="/"iv className={style.nav__link}>
          <div className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="../public/image/icon-nav-pots.svg"
              alt=""
            />
            <Link to="/" className={style.nav__link_h4}>Pots</Link>
          </div>
        </Link>

        <Link to="/recurringBils" className={style.nav__link}>
          <div className={style.nav__item}>
            <img
              className={style.nav__link__image}
              src="../public/image/icon-nav-recurring-bills.svg"
              alt=""
            />
            <Link to="/recurringBils" className={style.nav__link_h4}>Recurring bills</Link>
          </div>
        </Link>
        <img className={style.nav__item__footer__img} src="../Public/image/icon-minimize-menu.svg" alt="" />
      </nav>
    </header>
  );
}

export default SideBar;
