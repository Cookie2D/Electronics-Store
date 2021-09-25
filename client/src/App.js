import {Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import Goods from "./components/pages/Goods";
import {ProductProvider} from "./components/assets/Product/ProductContext";
import ProductPage from "./components/pages/ProductPage";


function App() {
    return (
        <ProductProvider>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/goods/:product_type" component={Goods}/>
                <Route path="/goods/:product_type/:id" component={ProductPage}/>
                <Route component={NotFound}/>
            </Switch>
        </ProductProvider>
    );
}

export default App;
