import React, { useEffect, useState } from 'react' // Import the React object, useEffect, and useState Hook from the React library

import { useDispatch, useSelector } from 'react-redux' // Import the useDispatch and useSelector methods from the react-redux library

import { fetchNewQuote } from './actions' // Import the fetchNewQuote method from the actions module

const QuoteBox = () => {
  // Define a functional component named QuoteBox
  const dispatch = useDispatch() // Get the dispatch function
  const { quote, author } = useSelector((state) => ({
    // Get the quote and author information from the Redux store
    quote: state.quote,
    author: state.author,
  }))
  const [backgroundColor, setBackgroundColor] = useState('#ffffff') // Define the background color state variable and initialize it to white
  const [textColor, setTextColor] = useState('#000000') // Define the text color state variable and initialize it to black

  useEffect(() => {
    // Define the side effect operation to fetch a new quote after the component is loaded
    dispatch(fetchNewQuote()) // Call the fetchNewQuote method to fetch a new quote and dispatch it to the Redux store
  }, [dispatch]) // Depends on the dispatch function

  const handleNewQuoteClick = () => {
    // Define the function to handle the click event of the "New Quote" button
    dispatch(fetchNewQuote()) // Fetch a new quote when the button is clicked
    setBackgroundColor(getRandomColor()) // Change the background color
  }

  const handleTweetQuote = () => {
    // Define the function to handle the click event of sharing the quote to Twitter
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}` // Prepare the URL to share the quote on Twitter
    window.open(tweetUrl, '_blank') // Open the Twitter page in a new tab
  }

  // Generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF' // Letters used to generate random colors
    let color = '#' // Start with the '#' character for hexadecimal color notation
    for (let i = 0; i < 6; i++) {
      // Loop to generate a 6-digit random color value
      color += letters[Math.floor(Math.random() * 16)] // Randomly select a character from 'letters' and append it to the color
    }
    setTextColor(getContrastColor(color)) // Calculate the text color based on the background color
    return color // Return the generated random color
  }

  // Calculate the contrast color
  const getContrastColor = (hexColor) => {
    const threshold = 130 // Contrast threshold value
    const red = parseInt(hexColor.substr(1, 2), 16) // Extract the red component of the color and convert it to decimal
    const green = parseInt(hexColor.substr(3, 2), 16) // Extract the green component of the color and convert it to decimal
    const blue = parseInt(hexColor.substr(5, 2), 16) // Extract the blue component of the color and convert it to decimal
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000 // Calculate the brightness of the color
    return brightness > threshold ? '#000000' : '#ffffff' // Return black or white as the text color based on the brightness
  }

  return (
    <div id='quote-box' className='quote-box' style={{ backgroundColor }}>
      {' '}
      {/* Render the quote box with the background color */}
      <div className='quote'>
        {' '}
        {/* Render the quote content */}
        <p id='text' style={{ color: textColor }}>
          {' '}
          {/* Render the quote text with the text color */}
          {quote} {/* Display the quote */}
        </p>
        <p id='author' className='author' style={{ color: textColor }}>
          {' '}
          {/* Render the author information with the text color */}- {author}{' '}
          {/* Display the author information */}
        </p>
      </div>
      <button id='new-quote' onClick={handleNewQuoteClick}>
        {' '}
        {/* Render the "New Quote" button with the click event handler */}
        New Quote {/* Button text */}
      </button>
      <a id='tweet-quote' href='#' onClick={handleTweetQuote}>
        {' '}
        {/* Render the link to share the quote on Twitter with the click event handler */}
        Tweet Quote {/* Link text */}
      </a>
    </div>
  )
}

export default QuoteBox // Export the QuoteBox component
