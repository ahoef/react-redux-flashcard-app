import { createStore } from 'redux';
import flashcardApp from './reducers';

let store = createStore(flashcardApp);

export default store;
