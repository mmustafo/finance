import ReactApexChart from "react-apexcharts";
import { useState } from "react";

export const Chart = ({ budgets }) => {
  const initialSeries = budgets.map((m) => m.maximum);

  const [state, setState] = useState({
    series: initialSeries,
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      labels: budgets.map((c) => c.category),
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    },
  });

  const appendData = () => {
    setState((prevState) => ({
      ...prevState,
      series: [...prevState.series, Math.floor(Math.random() * 100) + 1],
    }));
  };

  const removeData = () => {
    setState((prevState) => {
      if (prevState.series.length === 1) return prevState;
      return {
        ...prevState,
        series: prevState.series.slice(0, -1),
      };
    });
  };

  const randomize = () => {
    setState((prevState) => ({
      ...prevState,
      series: prevState.series.map(() => Math.floor(Math.random() * 100) + 1),
    }));
  };

  const reset = () => {
    setState((prevState) => ({
      ...prevState,
      series: initialSeries,
    }));
  };

  return (
    <div style={{ width: "300px" }}>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            width={380}
          />
        </div>
      </div>

    

      <div id="html-dist"></div>
    </div>
  );
};
