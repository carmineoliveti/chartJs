import { Chart, PolarAreaController } from "chart.js";
import { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";

Chart.register(
    PolarAreaController,
    
)

const PolarAreaChart = () => {

    const [data, setData] = useState({
        datasets: [{
            data: [],
            backgroundColor:[]
        },
      ],
      labels: [], 
    });
      useEffect(()=> {
        const fetchData = () =>  {
          fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
            const res = data.json();
            return res
          }).then((res) => {
            console.log("resss", res)
            const label = [];
            const data = [];
            for(var i of res) {
                label.push(i.name);
                data.push(i.address.geo.lng)
            }
            setData(
              {
                datasets: [{
                    data:data,
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
                }],
              labels:label, 
            }
            )
    
          }).catch(e => {
            console.log("error", e)
          }) 
        }
      fetchData();
      }, [])

      const options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }
      return(
          <div>
              <PolarArea 
              data={data}
              options={options}
              height={400}
              />
          </div>
      );
}
export default PolarAreaChart;