import React from 'react';

import { Route, Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState()
  // }
    update(field) {
      return (e) => {
              // console.log(field);
              console.log(e.target.value);
        this.setState({[field]: e.target.value});
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.processForm(this.state)
        .then(() => this.props.history.push("/benches"));
    }

    render() {

      const text = this.props.formType === "login" ? "Log In" : "Sign Up";
      const oppositeLink = this.props.formType === "login" ? "signup" : "login";

      console.log(this.props);

      return (
        <div>
          <h1>{text}</h1>

          <form onSubmit={this.handleSubmit.bind(this)}>

            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}></input>
            </label>

            <label>Password:
              <input type="text"
                value={this.state.password}
                onChange={this.update('password')}></input>
            </label>

            <input type="submit" value={text}></input>

          </form>

            <ul>
              {
                this.props.errors.map((error)=> <li>{error}</li>)
              }
            </ul>

            <Link to={`/${oppositeLink}`}>Go to {oppositeLink}</Link>

        </div>
      );
    }

}

export default SessionForm;
