import "./App.css";
import Register from "./components/moleculs/pages/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContentPage from "./components/moleculs/pages/ContentPage";

function App() {
  return (
    <div className="App position-relative">
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/news" exact component={ContentPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
