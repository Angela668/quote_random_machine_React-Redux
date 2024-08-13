// actions.js

// 1. Export Constant FETCH_NEW_QUOTE
export const FETCH_NEW_QUOTE = 'FETCH_NEW_QUOTE'

// 2. Export Async Function fetchNewQuote
export const fetchNewQuote = () => async (dispatch) => {
  try {
    // 3. Attempt to Fetch New Quote Data From API
    const response = await fetch('https://type.fit/api/quotes')
    
    // 4. Parse Response Data
    const data = await response.json()
    
    // 5. Select Random Quote
    const randomIndex = Math.floor(Math.random() * data.length)
    const { text: quote, author } = data[randomIndex]
    
    // 6. Dispatch to Redux Store
    dispatch({
      type: FETCH_NEW_QUOTE,
      payload: { quote, author },
    })
    
  // 7. Error Handling
  } catch (error) {
    console.error('Error fetching new quote:', error)
  }
}
