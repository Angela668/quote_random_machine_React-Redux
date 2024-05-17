import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import QuoteBox from './QuoteBox'
import store from './store'
import './styles.css' // Import your CSS file

// 使用 createRoot 替换 ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className='container'>
      {' '}
      {/* 添加一个容器 div */}
      <QuoteBox />
    </div>
  </Provider>
)
