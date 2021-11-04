import React from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from "./components/Home";
import CountDown from './components/Countdown'
import DigitalClock from './components/DigitalClock'
import Stopwatch from './components/Stopwatch'
import Notfound from './components/Notfound'

const App = () => {
  return (
      <Router>
       <>
          <nav>
            <ul>
              <li>
                  <Link to="/" style={{ textDecoration: 'none' }}> <span>Home</span></Link>
              </li>
              <li>
                <Link to="/clock" style={{ textDecoration: 'none' }}><span>Reloj</span></Link>
              </li>
              <li>
                <Link to="/counter" style={{ textDecoration: 'none' }}><span>Fecha</span></Link>
              </li>
              <li>
                <Link to="/crono" style={{ textDecoration: 'none' }}><span>Crono</span></Link>
              </li>
            </ul>
          </nav>
        </>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/clock" component={DigitalClock} />
            <Route path="/counter" component={CountDown} />
            <Route path="/crono" component={Stopwatch} />
            <Route component={Notfound} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;
