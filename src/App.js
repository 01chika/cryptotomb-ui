import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import Home from './Home';
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
        
        
      </div>
    </Router>
  );
}


export default App;
