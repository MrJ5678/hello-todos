/*
 * @Author: your name
 * @Date: 2020-05-11 13:04:40
 * @LastEditTime: 2020-05-11 15:57:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reminder-review/src/reducers/index.js
 */
import { ADD_REMINDER } from '../constants'

const reminder = (action) => {
  return {
    id: Math.random(),
    text: action.text
  }
}

const reminders = (state = [], action = {}) => {
  switch(action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        reminder(action)
      ]
    default: return state;
  }
}

export default reminders;
