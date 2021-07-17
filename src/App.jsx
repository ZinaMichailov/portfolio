import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/styles.scss';
// import { MainHeader } from './cmps/MainHeader'
import { HomePage } from './pages/HomePage'
import { MainFooter } from './cmps/MainFooter'

export function App() {
  return (
    <Router>
      <div className="App">
        {/* <MainHeader /> */}
        <Switch>
          <Route component={HomePage} path='/'/>
        </Switch>
        <MainFooter />
      </div>
    </Router>
  );
}
