import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
               <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
    
  );
}

export default App;
