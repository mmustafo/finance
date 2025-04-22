import style from "./FormInput.module.scss";

function FormInput({ label, name, type = "text" }) {
  return (
    <label className={style.Form__input}>
      <span className="spaan">{label}</span>
      <input
        className={style.form__input}
        type={type}
        name={name}
      />
    </label>
  );
}

export default FormInput;
