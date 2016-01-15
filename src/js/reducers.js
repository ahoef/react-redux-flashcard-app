import { combineReducers } from 'redux'

const initialState = {
  	answerHidden: true,
  	randomIndex: 0,
  	viewedCards: [], //array of objects in the order viewed
}


function answer(state = initialState, action) {
	console.log('within answer reducer');
	switch (action.type) {
    	case 'SHOW_ANSWER':
      		return Object.assign({}, state, {
        		answerHidden: false
      		})
    	default:
      		return state
  	}
}


// function example(state = [], action) {
//   switch (action.type) {
//   	case 'NEXT_CARD':
//   		return Object.assign({}, state, {
//         viewedCards: [
//           ...state.viewedCards, 9
//         ]
//       }) 

//     default:
//       return state
//   }
// }

const flashcardApp = combineReducers({
  // example,
  answer
})


export default flashcardApp