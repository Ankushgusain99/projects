import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const option={
  indexAxis:'y',
  elements:{
    bar:{
      borderWidth:1,
    }
  },
  responsive:true,
  plugins:{
    legend:{
      display:false,
      position:'right'
    },
    
  }
};
const data = {
labels:["Correct", "Incorrect", "Skipped", "Total"],
datasets: [
{
label: "Score",
data: [ 50,30,20,100],
backgroundColor: "skyblue",
}],
};



const BarGraph = () => {
  return (
    <div style={{ width: '600px', height: '300px' }}>
    <Bar data={data} options={option} />
    <div style={{ marginTop: '20px',marginLeft:'350px', fontSize: '16px', fontWeight: 'bold',color:'#808080' }}>
        Score
      </div>
  </div>
  )
}

export default BarGraph
