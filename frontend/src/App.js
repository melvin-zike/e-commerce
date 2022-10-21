import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Activate from "./pages/activate/Activate";
import Books from "./pages/books/Books";
import Download from "./pages/download/Download";
import Checkout from "./pages/Checkout";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/download/:token">
          <Download />
        </Route>
        <Route path="/book-store">
          <Books />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/activate/:token">
          <Activate />
        </Route>
      </Switch>
    </>
  );
}
export default App;
