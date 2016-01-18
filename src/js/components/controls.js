import React, { Component } from 'react';
import store from '../index.js';
import { showAnswer, goToNext } from '../actions';


export default class Controls extends Component {
    render() {
        return (
            <section id="controls">
                <button className="back" onClick="">&lt;</button>
                <button className="show-answer" onClick={e => this.showAnswer()}>show answer</button>
                <button className="next" onClick={e => this.goToNext()}>&gt;</button>
            </section>
        )
    }

    showAnswer() {
        store.dispatch(showAnswer());
    }

    goToNext() {
        store.dispatch(goToNext());
    }
}