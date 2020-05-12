/*
 * @Author: your name
 * @Date: 2020-05-11 13:04:40
 * @LastEditTime: 2020-05-12 09:40:17
 * @LastEditors: hhhhhq
 * @Description: In User Settings Edit
 * @FilePath: /reminder-review/src/reducers/index.js
 */
import { ADD_REMINDER, DEL_REMINDER, CLEAR_REMINDER } from '../constants'

const reminder = (action) => {
  return {
    id: Math.random(),
    text: action.text,
    dueDate: action.dueDate
  }
}

const reminders = (state = [], action = {}) => {
  switch(action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        reminder(action)
      ]
    case DEL_REMINDER:
      return state.filter(reminder => reminder.id !== action.id)
    case CLEAR_REMINDER:
      return []
    default: return state;
  }
}

export default reminders;
