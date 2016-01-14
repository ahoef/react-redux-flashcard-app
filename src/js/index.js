import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Controls from './components/controls.js'
import Flashcard from './components/flashcard.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import flashcardApp from './reducers'
import { showAnswer, paginateNext } from './actions'
import App from './app.js'

console.log(App);

let store = createStore(flashcardApp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));






