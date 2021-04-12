import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
