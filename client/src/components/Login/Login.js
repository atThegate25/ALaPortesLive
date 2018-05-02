import React, { Component } from "react";
import "./Login.css";


class Login extends Component {
    state = {
        username: "",
        password: ""
    };

handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };  

handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.password.length < 6) {
      alert(
        "Choose a more secure password"
      );
    } 

    this.setState({
      username: "",
      password: ""
    });
  };  

render() {
    return (
        <div className="form_div">
            <form>
          <input className="form"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="username"
          />
          <input className="form-p"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="password"
          />
          <button className="button" onClick={this.handleFormSubmit}>Submit</button>
        </form>

        </div>    
    )
}  

}

export default Login;