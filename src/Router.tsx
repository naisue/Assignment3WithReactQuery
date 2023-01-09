import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
    toggleDark: () => void;
    isDark: boolean;
}

function Router(props: IRouterProps) {
    return <BrowserRouter>
        <Switch>
            <Route path="/:coinId">
                <Coin isDark={ props.isDark } />
            </Route>
            <Route path="/">
                <Coins toggleDark={ props.toggleDark } isDark={ props.isDark }/>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;