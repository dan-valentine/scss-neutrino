import { Component } from 'react'
import './App.scss'

export default class App extends Component {
  state = {
    name: 'neutrino-scss'
  };

  render () {
    return (
      <div className='App'>
        <h1>Welcome to {this.state.name}</h1>
      </div>
    )
  }
}
