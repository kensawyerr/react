import {
  Route,
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Beverage from "./pages/Beverage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/beverage" exact component={Beverage} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
