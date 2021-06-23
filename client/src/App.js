import Register from "./components/moleculs/pages/register";
import Login from "./components/moleculs/pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContentPage from "./components/moleculs/pages/ContentPage";
import LandingPage from "./components/moleculs/pages/LandingPage";
import './App.css'

function App() {
  return (
    <div className="App position-relative">
      <Router>
        <Switch>

          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/news" exact component={ContentPage} />
          <Route path="/" exact component={LandingPage} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
