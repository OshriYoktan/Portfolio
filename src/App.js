import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { HomePage } from './pages/HomePage/HomePage';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage';
import {Contact} from './cmps/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route component={PortfolioPage} path="/portfolio" />
          <Route component={HomePage} path="/" />
        </Switch>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
