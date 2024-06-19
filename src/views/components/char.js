import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function DoughnutChart({ data }) {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: Object.values(data).map(() => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`),
                    borderColor: Object.values(data).map(() => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`),
                    borderWidth: 1.5
                }]
            },
            options: {
                layout: {
                    padding: {
                        bottom: 50 
                    }
                    
                },
                hoverOffset: 45,
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }, [data]);

    return <canvas ref={canvasRef}></canvas>;
};

export default DoughnutChart;