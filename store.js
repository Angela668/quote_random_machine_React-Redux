// // store.js
// import { createStore, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'
// import quoteReducer from './reducer'

// const store = createStore(quoteReducer, applyMiddleware(thunk))

// export default store


import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import quoteReducer from './reducer'
const store = createStore(quoteReducer, applyMiddleware(thunk))
export default store