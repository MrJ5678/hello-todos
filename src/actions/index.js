/*
 * @Author: your name
 * @Date: 2020-05-11 13:08:36
 * @LastEditTime: 2020-05-11 16:10:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reminder-review/src/actions/index.js
 */
import { ADD_REMINDER } from '../constants'

export const addReminder = (text) => {
  return {
    type: ADD_REMINDER,
    text
  }
};
