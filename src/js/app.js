import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Controls from './components/controls.js'
import Flashcard from './components/flashcard.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import app from './reducers.js'

let store = createStore(app);

export default class App extends Component {
  render() {
    return (
      <div>
        <Flashcard />
        <Controls />
      </div>)
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));
