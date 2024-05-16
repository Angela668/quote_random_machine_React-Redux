// App.js
import React from 'react'
import { Provider } from 'react-redux'
import QuoteBox from './QuoteBox'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <QuoteBox />
    </Provider>
  )
}

export default App
