import { Chart } from "../../components/Chart";
import { useCollectionsData } from "../../hooks/useCollactionsData";
import style from "./Butdgets.module.scss";

function Budgets() {
  const { data, isPending, error } = useCollectionsData();

  if (isPending) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <div className={style.Budgets__content}>
      <div className={style.Budgets__top}>
        <h1>Budgets</h1>
        <button>+ Add New Budget</button>
      </div>

      <div className={style.Budgets__wrapper}>
        <div className={style.Budgets__main}>
          {/* Chap taraf: Chart */}
          <div className={style.Budgets__chart}>
            {data.budgets && <Chart budgets={data.budgets} />}
          </div>

          {/* O'ng taraf: Ma'lumotlar */}
          <div className={style.Budgets__info}>
            {data.budgets?.slice(0, 3).map((budget, idx) => (
              <div key={idx} className={style.BudgetCard}>
                <div className={style.BudgetCard__header}>
                  <h2>{budget.title || "Entertainment"}</h2>
                  <h3>Max: ${budget.maxAmount || 50}</h3>
                  <img src="/image/icon-ellipsis.svg" alt="..." />
                </div>

                <div className={style.BudgetCard__spent}>
                  <div>
                    <h4>Spent</h4>
                    <h2>${budget.spent || 0}</h2>
                  </div>
                  <div>
                    <h4>Remaining</h4>
                    <h2>${budget.remaining || 0}</h2>
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
