import React, { Component, PropTypes } from 'react';
import { flashcardContent } from '../flashcardContent.js';
import store from '../index.js';
import { connect } from 'react-redux';

export default class Flashcard extends Component {
    constructor(props) {
        super(props);
        if (!store.getState().changeState.nextCard) {
            this.randomNumber = Math.floor((Math.random() * flashcardContent.length));
        }
    }

    render() {
        if (store.getState().changeState.nextCard) {
            this.randomNumber = Math.floor((Math.random() * flashcardContent.length));
        }
        this.props.answerHidden.answerHidden = store.getState().changeState.answerHidden;

        return (
            <section id="flashcard">
                <article className="card">
                    <div className="question-container">
                        <div className="question">{flashcardContent[this.randomNumber].question}</div>
                    </div>
                    <div className="answer-container">
                        <div className="answer" style={{display: this.props.answerHidden.answerHidden ? 'none' : 'block'}}>
                            {flashcardContent[this.randomNumber].answer}
                            <small>
                                <a href={flashcardContent[this.randomNumber].sourceUrl}>
                                    {flashcardContent[this.randomNumber].source}
                                </a>
                            </small>
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


function mapStateToProps(state) {
    return { answerHidden: state.changeState } 
}

export default connect(mapStateToProps)(Flashcard)