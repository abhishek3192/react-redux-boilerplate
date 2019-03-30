import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import updateUser from './actions/user_action'
import { dispatch } from 'rxjs/internal/observable/pairs';

class App extends Component {
  constructor(props) {
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser = () => {
    this.props.onUpdateUser('Neha sharma')
  }

  onUpdateChange = (event) => {
    this.props.onUpdateUser(event.target.value)
  }
  render() {
    return (
      <div className="App">
        <div onClick={this.onUpdateUser}>
          <button>press me</button>
          <input onChange = {this.onUpdateChange}/>
          {this.props.user}
        </div>
      </div>
    );
  }
}

// mapStateToProps receives the state from the store and then we can decide which props we can provide for
// the component
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
})

const mapActionsToProps = {
    onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);
