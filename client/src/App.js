import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TemplateProvider from "./templates/TemplateProvider";

function App() {
  return (
    <div>
      <TemplateProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </TemplateProvider>
    </div>
  );
}

export default App;
