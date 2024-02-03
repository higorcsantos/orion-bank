import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const data = [64000, 73000, 60000, 67000, 70000, 75000, 80000, 77000, 64000, 60000, 71000, 64000, 69000, 74000]

const BarChart = () => {
  const indexesOfThreeHighest = (() => {
    const sorted = [...data].map((value, index) => ({ value, index })).sort((a, b) => b.value - a.value);
    return sorted.slice(0, 3).map(item => item.index);
  })();

  const options: ApexOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: 18,
        horizontal: false,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      labels: {
        show: true,

      }
    },
    yaxis: {
      labels: {
        show: true,
      }
    },
    legend: {
      show: false
    },
    grid: {
      show: true, // Show grid lines
      borderColor: '#E0E0E0', // Color of grid lines
      position: 'back' // Position grid lines behind the bars
    },
    fill: {
      colors: data.map((_, index) => {
        if ([0, 1, data.length - 1].includes(index)) {
          return '#2C2C35'; // Color for the first two and last two bars
        } else if(indexesOfThreeHighest.includes(index)) {
          return  '#0EEAFF'
        }
        return '#4807EA'; // Use default or undefined for other bars
      }),
      opacity: 1
    }
  };

  const series = [{
    name: 'Compras',
    data: data
  }];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default BarChart;