import { Chart } from "../../components/Chart";
import { useCollectionsData } from "../../hooks/useCollactionsData";
import style from "./Oveview.module.scss";
// import soteka from"../assets/images/avatars"z
function Overview() {
  const { data, isPending, error } = useCollectionsData();

  if (isPending) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <div className="overview" id="wrapper">
      <h1 className={style.overview__h1}>Overview</h1>

      <ul>
        {data.balance.map((item) => (
          <div key={item.id} className={style.overview__butgets__wrapper}>
            <div className={style.overview__butgets____div}>
              <h4 className={style.overview__butgets__h4}>Current Balance</h4>
              <h2 className={style.overview__butgets__h2}>${item.current}</h2>
            </div>
            <div className={style.overview__butgets____div}>
              <h4 className={style.overview__butgets__h4}>Income</h4>
              <h2 className={style.overview__butgets__h2}>${item.income}</h2>
            </div>
            <div className={style.overview__butgets____div}>
              <h4 className={style.overview__butgets__h4}>Expenses</h4>
              <h2 className={style.overview__butgets__h2}>${item.expenses}</h2>
            </div>
          </div>
        ))}
      </ul>

      <div className={style.pots__budgets__df}>
        <div className={style.overview__pots__content}>
          <div>
            <div className="">
              <h2 className="red">Pots</h2>
              <p>See Details</p>
            </div>

            <div className={style.overview__pots__wrappers}>
              <div className={style.overview__pots__tootal}>
                <img src="../public/image/icon-pot.svg" alt="pot.svg" />
                <div className={style.overview__wr__saved}>
                  <h4 className={style.overview__wr__saved__h4}>Total Saved</h4>
                  <h2 className={style.overview__wr__saved__h2}>$850</h2>
                </div>
              </div>
              <div className={style.overview__chekadagi__div}>
                {data.pots &&
                  data.pots.map((pot) => {
                    return (
                      <div className={style.Overview__pots__left__df} key={pot.id}>
                        <div className={style.overview__pots__right__wrapper}>
                          <div className={style.overview__pots__right__2dv}>
                            <h4>{pot.name}</h4>
                            <h2>{pot.total}</h2>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="">{data && <Chart budgets={data.budgets} />}</div>
      </div>

      <div className={style.transactions__Recurring_bils__df}>
        <div className={style.transactions__content}>
          <div className={style.transactions__top__text}>
            <h2 className={style.transactions__top__text__h2}>Transactions</h2>
            <h3 className={style.transactions__top__text__h3}>View All</h3>
          </div>
          <div>
            {data.transactions &&
              data.transactions.slice(0, 5).map((tra) => {
                // console.log(tra.avatar);
                return (
                  <div key={tra.id}>
                    <div className={style.overview__transactions__item}>
                      <div className={style.overview__transactions__left}>
                        <img
                          className={style.overview__transactions__left__img}
                          src={tra.avatar}
                          alt={tra.name}
                        />
                        <h3 className={style.overview__transactions__left__h3}>
                          {tra.name}
                        </h3>
                      </div>
                      <div className={style.overview__transactions__right}>
                        <h2
                          className={`${
                            style.overview__transactions__right__h2
                          } ${tra.amount > 0 ? style.green : style.red}`}
                        >
                          ${tra.amount}
                        </h2>

                        <p className={style.overview__transactions__right__p}>
                          {tra.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={style.recurring__bils__content}>
          <div className={style.recurring__texts}>
            <div className={style.recurring__bils__content__top__div}>
              <h2 className={style.recurring__bils__text__h2}>
                Recurring Bills
              </h2>
              <h4 className={style.recurring__bils__text__p}>See Details</h4>
            </div>
            <div className={style.recurring__bils__wrapper}>
              <div className={style.paid_bills}>
                <h4 className={style.recurring__bils__wrapper__text__h4}>
                  Paid Bills
                </h4>
                <h3 className={style.recurring__bils__wrapper__text__h3}>
                  $190.00
                </h3>
              </div>

              <div className={style.paid_bills}>
                <h4 className={style.recurring__bils__wrapper__text__h4}>
                  Total Upcoming
                </h4>
                <h3 className={style.recurring__bils__wrapper__text__h3}>
                  $194.98
                </h3>
              </div>

              <div className={style.paid_bills}>
                <h4 className={style.recurring__bils__wrapper__text__h4}>
                  Due Soon
                </h4>
                <h3 className={style.recurring__bils__wrapper__text__h3}>
                  $59.98
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
