import React, { Component, PropTypes } from 'react'
import store from '../index.js'
import { showAnswer, paginateNext } from '../actions'


export default class Controls extends Component {
  render() {
    return (
      <section id="controls">
        <button className="back" onClick="">&lt;</button>
        <button className="show-answer" onClick={e => this.handleClick(e)}>show answer</button>
        <button className="next" onClick="">&gt;</button>
      </section>
    )
  }

  handleClick(e) {
    console.log(store.getState());
    store.dispatch(showAnswer());
    console.log(store.getState());
  }
}