import {withRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";


function App() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route component={NotFound} />
    </Switch>
  );
}

export default App;
