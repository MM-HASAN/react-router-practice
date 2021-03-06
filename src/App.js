import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import FriendDetail from "./Component/FriendDetail/FriendDetail";
import Home from "./Component/Home/Home";
import NoMatch from "./Component/NOMatch/NoMatch";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
