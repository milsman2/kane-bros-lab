import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export function BarChart() {
    const chartData = {
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
            {
                id: 1,
                label: '',
                data: [5, 6, 7],
            },
            {
                id: 2,
                label: '',
                data: [3, 2, 1],
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    return (
        <>
            <div className="w-1/4 m-2 bg-white">
                <Line options={options} data={chartData} />;
            </div>
        </>
    )
}