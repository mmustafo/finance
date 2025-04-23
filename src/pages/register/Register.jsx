import { Link } from "react-router-dom";
import FormInput from "../../components/fominput/FormInput";
import style from "./Register.module.scss";
import { useRegister } from "../../hooks/useRegister";

function Register() {
  const { data, ispending, register } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");
    const displayName = formData.get("displayName");

    register(displayName, email, password); 
  };

  return (
    <section className={style.login}>
      <div className={`${style.container} container`}>
        <div className={style.login__left}>
          <img src="/image/logo-large.svg" alt="logo" width={200} />
          <h3>Keep track of money and save for your future</h3>
          <p>
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
        <div className={style.login__right}>
          <div className={style.all__login__register__wrapper}>
            <h1 className={style.login__title}>Sign up</h1>
            <form onSubmit={handleSubmit} className={style.login__from}>
              <FormInput type="email" name="email" label="Email" />
              <FormInput type="password" name="password" label="Password" />
              <FormInput type="text" name="displayName" label="Display Name" />

              {ispending ? (
                <button
                  type="submit"
                  disabled
                  className={`${style.login__button} btn`}
                >
                  Loading...
                </button>
              ) : (
                <button type="submit" className={`${style.login__button} btn`}>
                  Sign up
                </button>
              )}
            </form>
            <div className={style.footer__div}>
              <span>Already have an account?</span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
