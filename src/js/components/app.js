import React, { Component } from 'react'
import Controls from './components/controls.js'
import Flashcard from './components/flashcard.js'


// // Log the initial state
// console.log('initial state')
// console.log(store.getState())

// // Every time the state changes, log it
// let unsubscribe = store.subscribe(() => {
//   console.log('changed state');
//   console.log(store.getState());
// })

// Dispatch some actions
// store.dispatch(showAnswer())
// store.dispatch(paginateNext())
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(completeTodo(0))
// store.dispatch(completeTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
// unsubscribe()




export default class App extends Component {
  render() {
    return (
      <div>
        <Flashcard />
        <Controls />
      </div>)
  }
}
