import React, { Component } from 'react';
import './header_styles.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Header">
        <div>
          Profile Image
        </div>
        <div className="nav">
          <Link to={'/'}>Home</Link>
          <Link to={`/about/${this.props.user_id}`}>About</Link>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Header) ;