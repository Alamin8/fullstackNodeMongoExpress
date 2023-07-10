import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chart from 'react-apexcharts'

const chartOptions = {

  series: [
    {
      name: "Daily Target",
      data: [58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420, 58420 ],
    },
    {
      name: "Daily Sales",
      data: [58420, 100541, 20003, 12354, 65482, 15794, 65489, 98554, 65549, 65448, 7844, 98774, 124440, 87454, 66548, 78877, 66547, 99877, 124459, 15857, 64577, 89951, 98744, 96998, 45776, 35489, 36447, 32458, 12257, 20000, 120076],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31"
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const YearlyChart = () => {
  
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let monthName= month[d.getMonth()]
  let YearName = d.getFullYear()

  return (
    <div className="chart">
      <div className="title">
        <span>Sells Statics of {monthName}, {YearName}</span>
        <MoreVertIcon fontSize="small" />
      </div>
      <Chart
        options={
          chartOptions.options
        }
        series={chartOptions.series}
        type="line"
        height="100%"
      />
    </div>
  );
};

export default YearlyChart;
