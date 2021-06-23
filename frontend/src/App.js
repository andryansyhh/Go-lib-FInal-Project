import "./App.css";
import Register from "./components/moleculs/pages/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/moleculs/header/header";
import Footer from "./components/moleculs/footer/footer";
import AdminRoutes from "./components/routes/admin/AdminRoutes";

function App() {
  return (
    <div className="App position-relative">
      <Header />
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <AdminRoutes />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
