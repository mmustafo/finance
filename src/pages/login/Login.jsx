import { Link } from "react-router-dom";
import FormInput from "../../components/fominput/FormInput";
import style from "./Login.module.scss";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const { data, ispending, loginUser } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    loginUser(email, password);
  };

  return (
    <section className={style.login}>
      <div className={`${style.container} container`}>
        <div className={style.login__left}>
          <img src="/image/logo-large.svg" alt="logo" width={200} />
          <h3>Welcome back!</h3>
          <p>Login to track your spending and manage your finances.</p>
        </div>
        <div className={style.login__right}>
          <div className={style.all__login__register__wrapper}>
            <h1 className={style.login__title}>Login</h1>
            <form onSubmit={handleSubmit} className={style.login__from}>
              <FormInput type="email" name="email" label="Email" />
              <FormInput type="password" name="password" label="Password" />

              {ispending ? (
                <button type="submit" disabled className={`${style.login__button} btn`}>
                  Loading...
                </button>
              ) : (
                <button type="submit" className={`${style.login__button} btn`}>
                  Login
                </button>
              )}
            </form>
            <div className={style.footer__div}>
              <span>Don't have an account?</span>
              <Link to="/register">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
