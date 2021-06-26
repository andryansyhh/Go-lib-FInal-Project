import "./App.css";
import Register from "./components/moleculs/pages/register";
import Login from "./components/moleculs/pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoutes from "./components/routes/admin/AdminRoutes";
import ContentPage from "./components/moleculs/pages/ContentPage";
import LandingPage from "./components/moleculs/pages/LandingPage";
import DetailCategoriPage from "./components/moleculs/pages/DetailCategoriPage";
import DetailBookPage from "./components/moleculs/pages/DetailBookPage";
import HomePage from "./components/moleculs/pages/HomePage";

function App() {
  return (
    <div className="App position-relative">
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/categorypage">
            <DetailCategoriPage />
          </Route>
          <Route path="/detailbookpage">
            <DetailBookPage />
          </Route>
          <Route path="/home" exact component={HomePage} />

          <Route path="/news" exact component={ContentPage} />
          <Route path="/" exact component={LandingPage} />
          <AdminRoutes />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div >
  );
}

export default App;
