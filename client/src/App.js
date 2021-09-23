import { Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import CardItem from "./components/assets/CardItem/CardItem";
import Header from "./components/assets/Header/Header";
import Footer from "./components/assets/Footer/Footer";


function App() {
  return (
    <Switch>
        <Route exact path="/">
            <Header/>
            <Home />
            <Footer/>

        </Route>
        <Route path="/card" component={CardItem} />
        <Route component={NotFound} />
    </Switch>
  );
}

export default App;
