import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
    {/* This will make sure you can go from page to page  */}
    {/* Dont forget to use "exact" */}
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
