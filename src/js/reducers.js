import { combineReducers } from 'redux'

function example(state = [], action) {
  switch (action.type) {

    default:
      return state
  }
}

const reducers = combineReducers({
  // otherReducer,
  example
})


export default reducers