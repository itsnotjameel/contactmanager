import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <br />
              <div className="card" style={{ padding: "20px" }}>
                <h1
                  className="display-4"
                  style={{ fontSize: "3rem", padding: "5px" }}
                >
                  Contacts List
                </h1>
                {contacts.map((contact) => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
