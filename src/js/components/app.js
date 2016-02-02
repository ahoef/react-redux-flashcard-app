import React, { Component } from 'react';
import Controls from './controls.js';
import Flashcard from './flashcard.js';
import { Provider } from 'react-redux';
import store from '../index.js';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Flashcard />
                <Controls />
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));
