//import logo from './logo.svg';
import './App.css';
import Click from "./Components/Click"
import Mouse from "./Components/Mouse"
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Click} />
        <Route path="/Mouse" component={Mouse} />
       
      
      </Switch>
    </HashRouter>
  </Router>
    
  );
}

export default App;
