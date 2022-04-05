import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js"
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = () => {

  const [data, setData] = useState({
    datasets: [{
      data: [],
      backgroundColor: []
    },
    ],
    labels: [],
  });
  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for (var i of res) {
          label.push(i.name);
          data.push(i.address.geo.lng)
        }
        setData(
          {
            datasets: [{
              data: data,
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
            labels: label,
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

  //      const [map, setMap] = useState(new Map());

  let map = new Map();

  function insertMap(map, key, value) {
    map.set(key, value);
    return map;
  }

  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => {
          const res = data.json();
          return res;
        }).then(res => {
          for (let i of res) {
            map.set(i.name, i.id);
            console.log(i.name);
          }
        }).catch(err => {
          console.log(err);
        })
    }
    fetchData();
  }, []);

  return (
    <div>
      <Line
        data={data}
        options={options}
        height={400}
      />
      <button onClick={() => console.log(map)}>click me for map</button>
    </div>
  );
}
export default LineChart;