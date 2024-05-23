import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

Chart.register(ChartDataLabels);

const PieChart = (props) => {
    const workload = props.count

    const labels = Object.keys(workload);
    const dataValues = Object.values(workload);

    const generateRandomColor = () => {
        const hexPart = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        return `#${hexPart()}${hexPart()}${hexPart()}`;
    };

    // Generate a list of random background colors for each data point
    const backgroundColors = dataValues.map(() => generateRandomColor());

    const data = {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: backgroundColors,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            datalabels: {
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                    const percentage = ((value / total) * 100).toFixed(2);
                    return `${percentage}%`;
                },
                color: '#fff',
            },
        },
    };

    const containerStyle = {
        width: '100%',
        height: '300px',
    };

    return (
        <div style={containerStyle}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;