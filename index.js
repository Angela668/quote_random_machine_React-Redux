import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import QuoteBox from './QuoteBox'
import store from './store'
import './styles.css' // Import your CSS file

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className='container'>
      {' '}
      {/* Add a container div */}
      <QuoteBox />
    </div>
  </Provider>
)
