import { useState } from "react";
import { Chart } from "../../components/Chart";
import { useCollectionsData } from "../../hooks/useCollactionsData";
import style from "./Butdgets.module.scss";
import chroma from "chroma-js";
import Select from "react-select";

function Budgets() {
  const { data, isPending, error } = useCollectionsData();
  const [modalOpen, setModalOpen] = useState(false);

  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",
    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",
        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };

  if (isPending) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <div className={style.Budgets__content}>
      {modalOpen && (
        <div className={style.budgets__modal}>
          <div className={style.budgets__modal__content}>
            <div className={style.budgets__modal__top__df}>
              <h2>Add New Budget</h2>
              <img
                src="/image/icon-close-modal.svg"
                alt="close"
                onClick={() => setModalOpen(false)}
              />
            </div>
            <div className={style.budget__modal__input__text}>
              <p className={style.budget__modal__text__p}>
                Choose a category to set a spending budget. These categories can
                help you monitor spending.
              </p>
              <label className={style.budgets__modal__legend}>Category</label>
              <select className={style.budgets__modal__category} name="category" id="category">
                {[...new Set(data.transactions?.map((c) => c.category))].map(
                  (uniqueCategory) => (
                    <option key={uniqueCategory} value={uniqueCategory}>
                      {uniqueCategory}
                    </option>
                  )
                )}
              </select>
              <label>Maximum Spend</label>
              <input
                className={style.budgets__modal__input__create}
                type="text"
                placeholder="$  $50.00"
              />
              <label className={style.budgets__modal__category}>Theme</label>
              <Select
                defaultValue={colourOptions[2]}
                options={colourOptions}
                styles={colourStyles}
              />
              <button className={style.budget__modal__btn}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      <div className={style.Budgets__top}>
        <h1>Budgets</h1>
        <button
          onClick={() => setModalOpen(true)}
          className={style.budget__right__add__button}
        >
          + Add New Budget
        </button>
      </div>

      <div className={style.Budgets__wrapper}>
        <div className={style.Budgets__main}>
          <div className={style.Budgets__chart}>
            {data.budgets && <Chart budgets={data.budgets} />}
          </div>

          <div className={style.Budgets__info}>
            {data.budgets?.slice(0, 3).map((budget, idx) => (
              <div key={idx} className={style.BudgetCard}>
                <div className={style.BudgetCard__header}>
                  <h2>{budget.title || "Entertainment"}</h2>
                  <h3>Max: ${budget.maxAmount || 50}</h3>
                  <img src="/image/icon-ellipsis.svg" alt="..." />
                </div>

                <div className={style.Budgets__content__loading__content}>
                  <div className={style.Budgets__content__loading}></div>
                </div>

                <div className={style.BudgetCard__spent}>
                  <div>
                    <h4>Spent</h4>
                    <h2>${budget.spent || 15.0}</h2>
                  </div>
                  <div>
                    <h4>Remaining</h4>
                    <h2>${budget.remaining || 30.0}</h2>
                  </div>
                </div>

                <div className={style.BudgetCard__latest}>
                  <div className={style.BudgetCard__latest__header}>
                    <h2>Latest Spending</h2>
                    <h2>See All</h2>
                  </div>

                  <div className={style.BudgetCard__transactions}>
                    {data.transactions?.slice(0, 3).map((trx, index) => (
                      <div key={index} className={style.TransactionItem}>
                        <div className={style.TransactionItem__left}>
                          <img src={trx.avatar} alt={trx.name} />
                          <h3>{trx.name}</h3>
                        </div>
                        <div className={style.TransactionItem__right}>
                          <h2>${trx.amount}</h2>
                          <p>{trx.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budgets;
