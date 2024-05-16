// actions.js
// export const FETCH_NEW_QUOTE = 'FETCH_NEW_QUOTE'

// export const fetchNewQuote = () => async (dispatch) => {
//   try {
//     const response = await fetch('https://type.fit/api/quotes')
//     const data = await response.json()
//     const randomIndex = Math.floor(Math.random() * data.length)
//     const { text: quote, author } = data[randomIndex]
//     dispatch({
//       type: FETCH_NEW_QUOTE,
//       payload: { quote, author },
//     })
//   } catch (error) {
//     console.error('Error fetching new quote:', error)
//   }
// }

// 定义获取新报价的动作类型常量
// export const FETCH_NEW_QUOTE = 'FETCH_NEW_QUOTE';

// 异步函数，用于从 API 获取新报价并分发到 Redux Store
// export const fetchNewQuote = () => async (dispatch) => {
//   try {
//     使用 fetch API 获取报价数据
//     const response = await fetch('https://type.fit/api/quotes');
//     const data = await response.json();
//    从数据中随机选择一条报价和作者信息
//     const randomIndex = Math.floor(Math.random() * data.length);
//     const { text: quote, author } = data[randomIndex]; // 从数据中提取报价和作者信息
//     分发动作到 Redux Store
//     dispatch({
//       type: FETCH_NEW_QUOTE, // 派发的动作类型
//       payload: { quote, author }, // 派发的数据载荷，包括报价和作者信息
//     });
//   } catch (error) {
//     错误处理
//     console.error('Error fetching new quote:', error);
//   }
// };

//1.Export Constant FETCH_NEW_QUOTE
export const FETCH_NEW_QUOTE = 'FETCH_NEW_QUOTE'

//2. Export Async Function fetchNewQuote:
export const fetchNewQuote = () => async (dispatch) => {
  try {
    //3.Attempt to Fetch New Quote Data From API:
    const response = await fetch('https://type.fit/api/quotes')
    //4.Parse Response Data:
    const data = await response.json()

    //5.Select Random Quote:// 从数据中随机选择一条报价和作者信息
    const randomIndex = Math.floor(Math.random() * data.length)
    // 从数据中提取报价和作者信息
    const { text: quote, author } = data[randomIndex]
    //6.Dispatch to Redux Store:// 分发动作到 Redux Store
    dispatch({
      type: FETCH_NEW_QUOTE,
      payload: { quote, author },
    })

    //7.Error Handling
  } catch (error) {
    console.error('Error fetching new quote:', error)
  }
}

//3.Attempt to Fetch New Quote Data:
