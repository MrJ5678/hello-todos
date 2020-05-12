/*
 * @Author: your name
 * @Date: 2020-05-11 13:04:40
 * @LastEditTime: 2020-05-12 10:03:00
 * @LastEditors: hhhhhq
 * @Description: In User Settings Edit
 * @FilePath: /reminder-review/src/reducers/index.js
 */
import { ADD_REMINDER, DEL_REMINDER, CLEAR_REMINDER } from '../constants'
import { bake_cookie, read_cookie } from 'sfcookies'

const reminder = (action) => {
  return {
    id: Math.random(),
    text: action.text,
    dueDate: action.dueDate
  }
}

const reminders = (state = read_cookie("reminders") || [], action = {}) => {
  let reminders = null
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [
        ...state,
        reminder(action)
      ]
      bake_cookie("reminders", reminders)
      return reminders
    case DEL_REMINDER:
      reminders =  state.filter(reminder => reminder.id !== action.id)
      return reminders
    case CLEAR_REMINDER:
      reminders = []
      return reminders
    default: return state;
  }
}

export default reminders;
