// store.js

// Import necessary functions from Redux
import { createStore, applyMiddleware } from 'redux'

// Import thunk middleware for handling asynchronous actions
import { thunk } from 'redux-thunk'

// Import the reducer function
import quoteReducer from './reducer'

// Create the Redux store
// Use createStore function, passing in the reducer and applying the thunk middleware
const store = createStore(quoteReducer, applyMiddleware(thunk))

// Export the store for use in other parts of the application
export default store
