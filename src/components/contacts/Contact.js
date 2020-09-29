import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import Popup from "../layout/popup/Popup";
import axios from "axios";
class Contact extends Component {
  state = {
    showContactInfo: false,
    popupIsOpen: false,
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    const toggleIsOpen = () =>
      this.setState({ popupIsOpen: !this.state.popupIsOpen });
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                {/* <Link to={`contact/edit/${id}`}> */}
                <i
                  className="fas fa-user-edit"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    marginRight: "1rem",
                    color: "black",
                  }}
                  onClick={toggleIsOpen}
                ></i>
                {/* </Link> */}
              </h4>
              {this.state.popupIsOpen && (
                <Popup
                  content={
                    <>
                      <b>Design your Popup</b>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                      <button>Test button</button>
                    </>
                  }
                  handleClose={toggleIsOpen}
                />
              )}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
