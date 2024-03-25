import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../../../style/admin/dashboard/chart.css";

function ChartComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
          label: 'Appointments',
          data: [50, 27, 30, 100, 44, 70, 200, 129, 23, 54, 231, 457],
          backgroundColor: 'rgba(27, 89, 248, 0.80)',
          borderColor: 'rgba(27, 89, 248, 1)',
          borderWidth: 1,
          borderRadius: 10,
          barPercentage: 0.3 
        }]
      },
      options: {
        indexAxis: 'x',
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: false,
            ticks: {
              stepSize: 100
            }
          },
        },
        plugins: {
          legend: {
            display: true
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="chart-box">
      <canvas ref={chartRef} style={{width: "35rem", height: "26rem", padding: "3% 3%"}}></canvas>
    </div>
  );
}

export default ChartComponent;
