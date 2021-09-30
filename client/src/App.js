import {Route, Switch, withRouter} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import Goods from "./components/pages/Goods";
import ProductPage from "./components/pages/ProductPage";
import Catalog from "./components/pages/Catalog";
import {SearchProvider} from "./components/content/searchContext";
import Search from "./components/pages/Search";


export default withRouter(function App({location}) {
    return (
        <SearchProvider>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/catalog" component={Catalog}/>
                <Route exact path="/goods/search" component={Search}/>
                <Route exact path="/goods/:product_type" component={Goods}/>
                <Route path="/goods/:product_type/:id" component={ProductPage}/>

                <Route component={NotFound}/>
            </Switch>
        </SearchProvider>
    );
})
