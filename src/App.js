import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Gallery from './Gallery';
import Home from './Home';
import Navbar from "./Navbar";
import NotFound from './NotFound';
import PlotDetail from './PlotDetail';
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
            <Route exact path="/plots/:id">
              <PlotDetail />
            </Route>
            <Route exact path="/wallet">
              <Wallet />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
        
        
      </div>
    </Router>
  );
}


export default App;
