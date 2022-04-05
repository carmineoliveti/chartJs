import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
  );

const BarChart = () => {

    const arr = ['a', 'b', 'a', 'a', 'c', 'c'];
    const map = new Map();

    useEffect(() => {
        const count = {};
        let cont = 0;
        for(let element of arr) {
            if(count[element]) {
                count[element] +=1;
                map.set(element, cont +=1)
            } else {
                count[element] = 1;
                map.set(element, cont +=1);
            }
        }
    }, []);

    const ok = () => {
        console.log(map);
    }

    var data = {
        labels: ['ok', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <Bar
                data={data}
                options={options}
                height={400}
                width={600}
            />
            <button onClick={ok}>click me</button>
        </div>
    )
}

export default BarChart;