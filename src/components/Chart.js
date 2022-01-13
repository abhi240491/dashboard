import { Bar } from "react-chartjs-2";
import {Chart, registerables } from 'chart.js';
Chart.register(...registerables)
function BarChart() {
  return (
    <div className='col-12 bg-white col-md-5'>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["10", "11", "12", "13", "14", "15", "16", "17"],
            datasets: [
              {
                // Label for bars
                label: "total sales",
                // Data or value of your each variable
                data: [
                  100, 10400, 13400, 25000, 100000, 1040000, 1340000, 50000000,
                ],
                // Color of each bar
                backgroundColor: [
                  "green",
                  "green",
                  "green",
                  "green",
                  "green",
                  "green",
                  "green",
                  "green",
                ],
                // Border color of each bar
                borderColor: [
                  "green",
                  "green",
                  "green",
                  "green",
                  "green",
                  "green",
                  "green",
                  "green",
                ],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={40}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        </div>
  );
}

export default BarChart;
