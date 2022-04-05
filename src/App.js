import './App.css';
import { Switch } from 'react-router-dom';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import LineChart from './components/LineChart';
import PolarAreaChart from './components/PolarAreaChart';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">  
      <Navbar />
      <Switch>
        <Route path="/doughnut" component={DoughnutChart} />
        <Route path="/barChart" component={BarChart} />
        <Route path="/line" component={LineChart} />
        <Route path="/polararea" component={PolarAreaChart} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
