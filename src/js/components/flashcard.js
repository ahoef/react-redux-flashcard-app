import React, { Component, PropTypes } from 'react'
import { flashcardContent } from '../flashcardContent.js'
import store from '../index.js'

export default class Flashcard extends Component {
  constructor(props) {
      super(props);
      this.answerHidden = store.getState().answer.answerHidden;
      this.randomNumber = Math.floor((Math.random() * flashcardContent.length));
  }
  render() {
    return (
      <section id="flashcard">
        <article className="card">
          <div className="question-container">
            <div className="question">{flashcardContent[this.randomNumber].question}</div>
          </div>
          <div className="answer-container">
            <div className="answer" style={{display: this.answerHidden ? 'none' : 'block'}}>
                {flashcardContent[this.randomNumber].answer}
            </div>
          </div>
        </article>
        <div className="card-stack-1"></div>
        <div className="card-stack-2"></div>
        <div className="card-stack-3"></div>
      </section>
    )
  }
}