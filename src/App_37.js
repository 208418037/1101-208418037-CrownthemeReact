import Homepage_37 from './pages/Homepage_37';
import ShopOverviewPage_37 from './pages/ShopOverviewPage_37';
import './App_37.scss';
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




const App_37 = () => {

  return (
    <Router>
      <div className="App">
        <p>React_Crown_37 Router</p>
        <ul>
          <li><Link to="Homepage_37">Homepage</Link></li>
          <li><Link to="ShopOverviewPage_37">Overview</Link></li>
        </ul>
        <Switch>
          <Route path='/Homepage_37' component={Homepage_37}/>
          <Route path='/ShopOverviewPage_37' component={ShopOverviewPage_37}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App_37;
