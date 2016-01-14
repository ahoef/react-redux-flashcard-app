export function showAnswer() {
  	return { 
  		type: 'SHOW_ANSWER'
  	}
}

export function paginateNext() {
  	return { 
  		type: 'NEXT_CARD'
  	}

}

export function paginateBack() {
  	return { 
  		type: 'PREVIOUS_CARD'
  	}

}