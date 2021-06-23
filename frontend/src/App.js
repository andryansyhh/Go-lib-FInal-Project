import "./App.css";
import Register from "./components/moleculs/pages/register";
import Login from "./components/moleculs/pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/moleculs/header/header";
import Footer from "./components/moleculs/footer/footer";
import AdminRoutes from "./components/routes/admin/AdminRoutes";
import ContentPage from "./components/moleculs/pages/ContentPage";
import LandingPage from "./components/moleculs/pages/LandingPage";

function App() {
  return (
    <div className="App position-relative">
      <Header />
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/news" exact component={ContentPage} />
          <Route path="/landingpage" exact component={LandingPage} />
          <AdminRoutes />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div >
  );
}

export default App;
