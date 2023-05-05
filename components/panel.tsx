import React, { InputHTMLAttributes } from "react";
import Image from "next/image";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import img from "../public/two-way-arrows.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart USD to EUR",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Panel = () => {
  // api key for mock api
  const ApiKey = "FRjvs2ORE6JnvvHgNCYT0nhUhiBYiYey4mEaEiyK";

  // state
  const [rate, setRate] = React.useState(0);
  const [usdAmount, setUsdAmount] = React.useState(1);
  const [eurAmount, setEurAmount] = React.useState(1);

  // function for get currency
  const getCurrency = () => {
    axios
      .get(`https://api.currencyapi.com/v3/latest?apikey=${ApiKey}`)
      .then((res) => {
        setRate(res.data.data.EUR.value);
      });
  };

  // get currency after component mount
  React.useEffect(() => {
    const interval = setInterval(() => {
      getCurrency();
    }, 200000);
    return () => clearInterval(interval);
  }, []);

  // on change function for usd input
  const handleChangeUSD = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.value) {
      let newEur = rate * Number(e.target.value);
      setUsdAmount(Number(e.target.value));
      setEurAmount(newEur);
    } else {
      setUsdAmount(0);
      setEurAmount(0);
    }
  };

  // on change function for usd input
  const handleChangeEUR = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.value) {
      let newUsd = Number(e.target.value) / rate;
      setUsdAmount(newUsd);
      setEurAmount(Number(e.target.value));
    } else {
      setEurAmount(0);
      setUsdAmount(0);
    }
  };

  // render panel component
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className=" flex flex-col h-[80vh] mt-10 relative mx-4 w-full md:w-1/2">
        <div className="w-[90vw] md:w-full h-[40vh] rounded-t-md bg-blue-800 m-auto shadow-lg">
          {" "}
          <div className="flex flex-col justify-start items-center h-full">
            <h3 className="text-white font-extrabold h-[60px] mt-10">USD</h3>
            <input
              name="USE"
              type="text"
              pattern="[0-9]*"
              value={usdAmount}
              className=" rounded-md p-4  outline-none bg-blue-300"
              onChange={handleChangeUSD}
            />
          </div>
        </div>
        <div className="w-[120px] rounded-full h-[120px] absolute bg-slate-300 border-4 border-solid border-blue-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={img}
            alt="two way arrow"
            className="w-[50px] rotate-90 m-auto mt-8"
          />{" "}
        </div>
        <div className="w-[90vw] md:w-full h-[40vh] rounded-b-md bg-slate-300 m-auto shadow-lg">
          <div className="flex flex-col justify-end items-center h-full ">
            <input
              name="USE"
              type="text"
              pattern="[0-9]*"
              defaultValue={rate}
              value={eurAmount}
              className=" rounded-md p-4  outline-none bg-blue-300"
              onChange={handleChangeEUR}
            />
            <h3 className="text-white font-extrabold h-[60px] mt-10">EUR</h3>
          </div>
        </div>
      </div>
      <div className="w-5/6 md:w-1/2 my-7">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Panel;
