import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
        display:false,
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

const data = {
  labels: ["Incorrect", "Correct", "Skipped"],
  datasets: [
    {
      label: "Score",
      data: [50, 30, 20],
      backgroundColor: [
        '#0D98BA',
        'skyblue',
        'rgba(255, 206, 86, 1)',
      ],
      borderColor: [
        '#0D98BA',
        'skyblue',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div style={{ width: '600px', height: '300px',marginLeft:'150px'}}>
      <Pie data={data} options={options} />
      <div style={{ marginTop: '20px', fontSize: '16px', fontWeight: 'bold',marginLeft:'100px',color:'#808080' }}>
        Question Report
      </div>
    </div>
  );
}

export default PieChart;
