import { Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import CardItem from "./components/assets/CardItem/CardItem";


function App() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/card" component={CardItem} />
        <Route component={NotFound} />
    </Switch>
  );
}

export default App;
