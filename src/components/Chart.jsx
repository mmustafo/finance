import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";
import { useCollectionsData } from "../hooks/useCollactionsData";

export const Chart = ({ budgets }) => {
  const { data, error, isPending } = useCollectionsData();

  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: "donut",
      fontFamily: "Public Sans",
    },
    labels: [],
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { show: false },
        },
      },
    ],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: { show: true, fontFamily: "Public Sans" },
            name: { show: true, fontWeight: 900 },
          },
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
      show: true,
    },
  });

  // budgets o‘zgarsa, grafikni yangilash
  useEffect(() => {
    if (budgets?.length) {
      setSeries(budgets.map((m) => m.maximum));
      setOptions((prev) => ({
        ...prev,
        labels: budgets.map((m) => m.category),
      }));
    }
  }, [budgets]);

  if (isPending) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>;

  return (
    <div id="my__chart">
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={380}
          />
          <div className="chart__legend__content">
            {data?.budgets?.length > 0 ? (
              data.budgets.map((bud) => (
                <div className="chart__title__contents" key={bud.id}>
                  <div className="chart__legend__content__left__theme">
                    <div
                      className="chart__legend__content__theme__box"
                      style={{ backgroundColor: bud.theme }}
                    ></div>
                    <h4 className="chart__legend__content__right__text__h4">
                      {bud.category}
                    </h4>
                  </div>
                  <div className="chart__legend__content__right__text">
                    <h2 className="chart__legend__content__right__text__h2">
                      $ {bud.maximum}
                    </h2>
                  </div>
                </div>
              ))
            ) : (
              <p>Ma'lumotlar mavjud emas</p>
            )}
          </div>
        </div>
      </div>

      <div id="html-dist"></div>
    </div>
  );
};
