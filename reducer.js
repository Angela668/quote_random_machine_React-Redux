// reducer.js

// 1. Import FETCH_NEW_QUOTE constant from actions file
import { FETCH_NEW_QUOTE } from './actions'

// 2. Define initial state object
const initialState = {
  quote: '', // 3. Quote text field
  author: '', // 4. Author field
}

// 5. Define reducer function, accepting state and action
export const quoteReducer = (state = initialState, action) => {
  // 6. Handle different cases based on action type
  switch (action.type) {
    // 7. When action type is FETCH_NEW_QUOTE
    case FETCH_NEW_QUOTE:
      // 8. Return new state object
      return {
        ...state, // 9. Copy all fields from original state
        quote: action.payload.quote, // 10. Update quote field with quote from action payload
        author: action.payload.author, // 11. Update author field with author from action payload
      }
    // 12. If action type is unknown or doesn't match any known type
    default:
      return state // 13. Return original state object
  }
}

export default quoteReducer // 14. Export reducer function
