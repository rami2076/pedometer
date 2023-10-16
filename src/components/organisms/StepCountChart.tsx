// src/components/organisms/StepCountChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';

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
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface StepCountChartProps {
    data: number[];
    labels: string[];
}

const StepCountChart: React.FC<StepCountChartProps> = ({ data, labels }) => {

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "グラフタイトル",
            },
        },
    };

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: '歩数',
                data: data,
                fill: false,
                borderColor: 'blue',
            },
        ],
    };

    return (
        <div>
            <Line options={options} data={chartData} />
        </div>
    );
};

export default StepCountChart;
