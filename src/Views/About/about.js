import React, { Component } from 'react';
import './about_styles.css';
import Header from '../../Shared/Header/header';
import {connect} from 'react-redux';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Header/>
        <p>{this.props.user_name}</p>
        <p>{this.props.user_email}</p>
      </div>
    );
  }
}

export default connect(state => state)(About);