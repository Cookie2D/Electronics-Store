import {Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import Goods from "./components/pages/Goods";
import Product from "./components/assets/Product/Product";
import {ProductProvider} from "./components/assets/Product/ProductContext";


function App() {
    return (
        <ProductProvider>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/goods/:product_type" component={Goods}/>
                <Route path="/goods/:product_type/:id" component={Product}/>
                <Route component={NotFound}/>
            </Switch>
        </ProductProvider>
    );
}

export default App;
