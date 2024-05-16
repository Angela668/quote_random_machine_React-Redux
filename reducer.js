// reducer.js
// import { FETCH_NEW_QUOTE } from './actions'

// const initialState = {
//   quote: '',
//   author: '',
// }

// const quoteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_NEW_QUOTE:
//       return {
//         ...state,
//         quote: action.payload.quote,
//         author: action.payload.author,
//       }
//     default:
//       return state
//   }
// }

// export default quoteReducer

// import { FETCH_NEW_QUOTE } from './actions' // 从actions文件中导入FETCH_NEW_QUOTE常量

// const initialState = { // 定义初始状态对象
//   quote: '', // 报价文本字段
//   author: '', // 作者字段
// }

// const quoteReducer = (state = initialState, action) => { // 定义reducer函数，接收状态和动作
//   switch (action.type) { // 根据动作类型进行不同的处理
//     case FETCH_NEW_QUOTE: // 当动作类型为FETCH_NEW_QUOTE时
//       return { // 返回新的状态对象
//         ...state, // 复制原状态中的所有字段
//         quote: action.payload.quote, // 更新报价文本字段为动作中的payload中的quote字段
//         author: action.payload.author, // 更新作者字段为动作中的payload中的author字段
//       }
//     default: // 如果动作类型未知或不匹配任何已知类型
//       return state // 返回原状态对象
//   }
// }

// export default quoteReducer // 导出reducer函数

// 1.从actions文件中导入FETCH_NEW_QUOTE常量
import { FETCH_NEW_QUOTE } from './actions'

// 2.定义初始状态对象
const initialState = {
  quote: '', // 3.报价文本字段
  author: '', //4,作者字段
}

//5. 定义reducer函数，接收状态和动作
export const quoteReducer = (state = initialState, action) => {
  
    // 6.根据动作类型进行不同的处理
    switch (action.type) {
      //7. 当动作类型为FETCH_NEW_QUOTE时
      case FETCH_NEW_QUOTE:
        // 9.复制原状态中的所有字段
        // 10.更新报价文本字段为动作中的payload中的quote字段
        // 11.更新作者字段为动作中的payload中的author字段

        // 8.返回新的状态对象
        return {
          ...state,
          quote: action.payload.quote,
          author: action.payload.author,
        }

      // 12.如果动作类型未知或不匹配任何已知类型
      default:
        return state // 13.返回原状态对象
    }
}

export default quoteReducer;// 14.导出reducer函数




