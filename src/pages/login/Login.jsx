import { Link } from "react-router-dom";
import style from "./Login.module.scss";

function Login() {
  return (
    <div className={style.Login_content}>
      <div className={style.Login__img_pag}>
        <div className={style.Login__footer__text}>
          <img
            className={style.Login__img__image__log}
            src="/image/logo-large.svg"
            alt="Logo"
          />
          <div>
            <h3 className={style.Login__img__Text__h3}>
              Keep track of your money and save for your future
            </h3>
            <p className={style.Login__img__Text__p}>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>

      <div className={style.Login_pag_wrapper}>
        <div className={style.Login_pag}>
          <form className={style.Login__form}>
            <div className={style.Login__contents}>
              <h3>Login</h3>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <button type="submit">Login</button>
              <small>
                Need to create an account?
                <Link to="/register">Sign Up</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
