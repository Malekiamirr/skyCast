// import {
//   Chart as ChartJs,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useContext, useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import WeatherContext from "../context/weather";
// ChartJs.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function RainChart() {
//   const [chartData, setChartData] = useState({ datasets: [] });
//   const [chartOptions, setChartOptions] = useState({});

//   const { darkMode } = useContext(WeatherContext);

//   useEffect(() => {
//     setChartData({
//       labels: ["00-03Am", "03-06Pm", "06-09Am", "09-12Am"],
//       datasets: [
//         {
//           label: "Chance of Rain",
//           data: [12, 55, 34, 99],
//           color: "#fff",
//           tickColor: "#fff",
//           textStrokeColor: "#fff",
//           backgroundColor: "#BBD7EC",
//           borderRadius: 5000,
//           hoverBackgroundColor: "#AECAff",
//           maxBarThickness: 12,
//         },
//       ],
//     });
//     setChartOptions({
//       Responsive: true,

//       scales: {
//         x: {
//           grid: {
//             color: "#4b5563",
//             display: "block",
//           },
//         },
//         y: {
//           ticks: {
//             grace: "100%",
//             callback: (context, index) => {
//               let response;
//               if (context === 33) {
//                 response = "Sunny";
//               } else if (context === 66) {
//                 response = "Heavy";
//               } else if (context === 99) {
//                 response = "Rainy";
//               } else {
//                 response = "";
//               }
//               return response;
//             },
//             beginAtZero: true,
//             min: 0,
//             max: 100,
//             stepSize: 33,
//           },
//           grid: {
//             color: "#1E1E1E",
//           },
//         },
//       },
//       Plugins: {
//         Legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "Chance of Rain",
//         },
//       },
//     });
//   }, []);

//   const BarPattern = {
//     id: "barPattern",
//     beforeDatasetsDraw(chart, args, pluginOption) {
//       const {
//         ctx,
//         chartArea: { top, button, height },
//         scales: { x, y },
//       } = chart;

//       ctx.save();
//       const width = chart.getDatasetMeta(0).data[0].width;

//       chart.datasetMeta(0).data.forEach((dataPoint, index) => {
//         ctx.fillRect(
//           x.getPixelForValue(index) - width / 2,
//           top,
//           10,
//           height - 0.5
//         );
//       });
//     },
//   };

//   return (
//     <div
//       className={`
//     ${darkMode === true ? "text-white" : "text-gray"}
//      flex flex-col justify-around xl:items-center mt-6 xl:mt-0 h-full`}
//     >
//       <p className='font-medium pl-6 xl:pl-0 xl:-translate-y-2'>
//         Chance of Rain
//       </p>
//       <div className='mx-auto max-w-lg'>
//         <Bar data={chartData} options={chartOptions} plugins={{ BarPattern }} />
//       </div>
//     </div>
//   );
// }

import { FaWeight } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "11AM",
    Rc: 30,
    amt: 2,
  },
  {
    name: "12AM",
    Rc: 20,
    amt: 2,
  },
  {
    name: "01PM",
    Rc: 58,
    amt: 2,
  },
  {
    name: "02PM",
    Rc: 40,
    amt: 2,
  },
  {
    name: "03PM",
    Rc: 60,
    amt: 2,
  },
];

function RainChart() {
  // Depending on the value of the tick, you'll have a different label
  function formatYAxis(value) {
    if (value == 25) return "Heavy";
    if (value == 50) return "Sunny";
    if (value == 75) return "Rainy";
    else return "";
  }

  return (
    <ResponsiveContainer width='100%' height='100%' className='hidden md:block'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 100,
          right: 30,
          left: 20,
          bottom: 0,
        }}
        barCategoryGap={18}
      >
        <XAxis
          axisLine={false}
          dataKey='name'
          scale='point'
          padding={{ left: 20, right: 20 }}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "12px",
            fontWeight: "200",
          }}
          tick={{ fill: "#d1d5db" }}
        />
        <YAxis
          tick={{ fill: "#d1d5db" }}
          tickFormatter={formatYAxis}
          domain={[0, 100]}
          axisLine={false}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            fontWeight: "200",
          }}
        />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#fff" }} />
        <Legend
          width={70}
          wrapperStyle={{
            top: 40,
            right: 110,
            backgroundColor: "transparent",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "30px",
          }}
        />
        <CartesianGrid strokeDasharray='5 5' stroke='transparent' />
        <Bar
          dataKey='Rc'
          fill='#aecadf'
          background={{ fill: "#454449", radius: [10, 10, 10, 10] }}
          radius={[10, 10, 10, 10]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RainChart;
