import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Gallery from './Gallery';
import Home from './Home';
import Navbar from "./Navbar";
import Wallet from './Wallet';

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
            <Route exact path="/wallet">
              <Wallet />
            </Route>
          </Switch>
          <Footer />
        </div>
        
        
      </div>
    </Router>
  );
}


export default App;
