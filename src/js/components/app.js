import React, { Component } from 'react'
import Controls from './controls.js'
import Flashcard from './flashcard.js'
import { connect } from 'react-redux';
import store from '../index.js'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Flashcard />
        <Controls />
      </div>)
  }
}

// // Which props do we want to inject, given the global state?
// // Note: use https://github.com/faassen/reselect for better performance.
// function select(state) {
//   return {
//     visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//     visibilityFilter: state.visibilityFilter
//   }
// }

// // Wrap the component to inject dispatch and state into it
// export default connect(select)(App)

ReactDOM.render(<App store={store}/>, document.getElementById('main'));
