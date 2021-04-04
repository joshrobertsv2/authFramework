import React, { Component } from 'react';
import { logout, isLogin } from '../middleware/index';
import { Link } from 'react-router-dom';

class Homepage extends Component {

  constructor(props) {
    super(props);

    // checks users status, value comes from middleware folder
    this.state = {
      isLogin: isLogin()
    }
  }

  // removes token from users localstorage, comes from middleware folder
  handleLogout = () => {
    logout();
    this.setState({
      isLogin: false
    })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>

        {this.state.isLogin ?
          <button onClick={() => this.handleLogout()}>Click here to log out</button>
          : <div><Link to="/signin">Go to sign in page</Link><br />
            <Link to="/register">Go to Registration</Link>
          </div>
        }
      </div>
    );
  }
}

export default Homepage;