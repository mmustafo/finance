import style from "../transactions/Transactions.module.scss";
import { useCollectionsData } from "../../hooks/useCollactionsData";

function Transactions() {
  const { data, isPending, error } = useCollectionsData();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div class={style.Transactions_content}>
      <h1 className={style.transactions__content__h1}>Transactions</h1>
      <div class={style.Transactions__wrapper}>
        <div class={style.Transactions__inputs}>
          <input
            class={style.Transactions__input__Search}
            type="text"
            placeholder="Search transaction$"
          />
          <div className={style.Transactions__input__right}>
            <div class={style.Transactions__input__wrapper}>
              <span class={style.Transactions__input__label}>Sort by</span>
              <select
                class={style.Transactions__input__Latest}
                name=""
                id=""
              >
                <option  value="Latest">Latest</option>
                <option value="Latest">Latest</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
            </div>

            <div class={style.Transactions__input__wrapper}>
              <span class={style.Transactions__input__label}>Category</span>
             <select name="" id="" class={style.Transactions__input}>
              <option value="All Transactions">All Transactions</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Bills">Bills</option>
              <option value="Groceries">Groceries</option>
              <option value="Dining Out">Dining Out</option>
              <option value="Transportation">Transportation</option>
             </select>
            </div>
          </div>
        </div>

        <div className={style.Transactions__category__content}>
          <h4 className={style.Transactions__category____ortadagi}>
            Recipient / Sender
          </h4>
          <div className={style.Transactions__category____ortadagi}>
            <h4 className={style.Transactions__category____text__h4}>
              Category
            </h4>
            <h4 className={style.Transactions__category____text__h4}>
              Transaction Date
            </h4>
          </div>
          <h4 className={style.Transactions__category____ortadagi}>Amount</h4>
        </div>

        <div>
          {data.transactions &&
            data.transactions.slice(0, 8).map((tra) => {
              return (
                <div
                  key={tra.id}
                  className={style.transactions__people__wrapper}
                >
                  <div className={style.user__category__content}>
                    <div className={style.people__left__user}>
                      <img
                        className={style.transactions__users__img}
                        src={tra.avatar}
                        alt={tra.name}
                      />
                      <h3 className={style.transactions__users__text__h3}>
                        {tra.name}
                      </h3>
                    </div>
                    <div className={style.user__category____ortadagi}>
                      <h4 className={style.user__category____ortadagi__h4}>
                        {tra.category}
                      </h4>
                      <h4 className={style.user__category____ortadagi__h4}>
                        {tra.date}
                      </h4>
                    </div>
                    <h3
                      key={tra.id}
                      className={`${style.user__category__oxiri__h3} ${
                        tra.amount > 0 ? style.green : style.red
                      }`}
                    >
                      ${tra.amount}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
