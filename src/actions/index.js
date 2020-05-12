/*
 * @Author: your name
 * @Date: 2020-05-11 13:08:36
 * @LastEditTime: 2020-05-12 09:39:01
 * @LastEditors: hhhhhq
 * @Description: In User Settings Edit
 * @FilePath: /reminder-review/src/actions/index.js
 */
import { ADD_REMINDER, DEL_REMINDER, CLEAR_REMINDER } from '../constants'

export const addReminder = (text, dueDate) => {
  return {
    type: ADD_REMINDER,
    text,
    dueDate
  }
};

export const delReminder = (id) => {
  return {
    type: DEL_REMINDER,
    id
  }
};

export const clearReminder = () => {
  return {
    type: CLEAR_REMINDER,
  }
};