import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Register extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //log us in
  register = (e) => {
    e.preventDefault();
    const {email, password} = this.state
    axios.post(`/auth/register`, {email, password})
    .then( res => {
      this.props.history.push(`/dashboard`)
    })
    .catch(err => {
      alert('could not register')
    })
  }

  render() {
    const {email, password} = this.state
    return (
      <div>
        <form onSubmit={(e) => this.login(e)}>
          <input type="text" placeholder='email...' name="email" value={email} onChange={(e) => this.changeHandler(e)} />
          <input type="password" placeholder="password..." name='password' value={password} onChange={(e) => this.changeHandler(e)}  />
          <input type="submit" value="Register"  />
        </form>
        <span>already have account log in here </span>
        <Link to="/">
          login
        </Link>
      </div>
    )
  }
}
