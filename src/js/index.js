import React, { Component } from 'react'
import Controls from './components/controls.js'
import Flashcard from './components/flashcard.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import flashcardApp from './reducers'
import { showAnswer, paginateNext } from './actions'

let store = createStore(flashcardApp);

export default store;
