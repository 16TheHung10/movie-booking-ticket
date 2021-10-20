import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import HomeTemplate from "./Template/HomeTemplate/HomeTemplate.jsx";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import News from "./Pages/News/News";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { history } from "./util/settings/history";
import Detail from "./Pages/Detail/Detail";
import PageNotFound from "./Pages/PageNotDound/PageNotFound";
import LoginTemplate from "./Template/LoginTemplate/LoginTemplate";
import TicketRoom from "./Pages/TicketRoom/TicketRoom";
import CheckOutTemplate from "./Template/CheckOutTemplate/CheckOutTemplate";
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/movie/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/news" exact Component={News} />
        <CheckOutTemplate path="/checkout/:id" exact Component={TicketRoom} />
        <LoginTemplate path="/login" exact Component={Login} />
        <LoginTemplate path="/register" exact Component={Register} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
