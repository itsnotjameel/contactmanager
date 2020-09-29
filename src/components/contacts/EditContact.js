import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class editContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {
      name: "",
      email: "",
      phone: "",
    },
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required." } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required." } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required." } });
      return;
    }

    const updContact = {
      name,
      email,
      phone,
    };

    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({ name: "", email: "", phone: "", errors: {} });
    this.props.history.push("/");
  };

  onInputText = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onInputText}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    type="email"
                    value={email}
                    onChange={this.onInputText}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onInputText}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block "
                    style={{
                      backgroundColor: "#37a654",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default editContact;
