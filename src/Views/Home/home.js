import React, { Component } from 'react';
import './home_style.css';
import Header from '../../Shared/Header/header'
import axios from 'axios';
import {connect} from 'react-redux';
class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
    }
    this.login =this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e){
    e.preventDefault();
    const body = {
      email:this.state.email,
    }
    axios.post('/api/login', body)
      .then((response)=>{
        if(typeof response.data !== 'string'){
          this.props.dispatch({
            type:'login',
            payload: response.data
          })
          this.props.history.push(`/about/${response.data.id}`)
        }else{
          alert("No user with this email.")
        }
      })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="home">
        <Header/>
        <div>
          <form onSubmit= {this.login}>
            <input onChange={this.handleChange} name="email" value={this.state.email} type="text"/>
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Home);