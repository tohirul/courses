import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import MigratedCourses from "./components/MigratedCourses/MigratedCourses";
import About from "./components/About/About";
import Helpline from "./components/Helpline/Helpline";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import BestCourses from "./components/BestCourses/BestCourses";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <BestCourses />
          </Route>

          <Route path="/Home">
            <BestCourses />
          </Route>
          {/* Courses Library */}
          <Route path="/Courses">
            <Courses></Courses>
          </Route>

          {/*  Cart */}
          <Route path="/Cart">
            <Cart></Cart>
          </Route>

          {/* Migrated Courses */}
          <Route path="/MigratedCourses">
            <MigratedCourses></MigratedCourses>
          </Route>

          {/* About */}
          <Route path="/About">
            <About></About>
          </Route>

          {/* HelpLine */}
          <Route path="/Helpline">
            <Helpline></Helpline>
          </Route>

          {/* Error Page */}
          <Route path="/*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
