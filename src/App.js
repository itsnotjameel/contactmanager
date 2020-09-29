import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={Contacts}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/contact/add"}
                  component={AddContact}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/contact/edit/:id"}
                  component={EditContact}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/about/:id"}
                  component={About}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/test"}
                  component={Test}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
