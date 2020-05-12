/*
 * @Author: your name
 * @Date: 2020-05-11 12:53:38
 * @LastEditTime: 2020-05-12 09:38:38
 * @LastEditors: hhhhhq
 * @Description: In User Settings Edit
 * @FilePath: /reminder-review/src/components/App.js
 */
import React, { Component } from 'react';
import moment from 'moment'
import { addReminder, delReminder, clearReminder } from '../actions'
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: ''
    };
  }

  render() {
    const { text } = this.state
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">
            <input 
              type="text" 
              value={ text }
              className="form-control mr-2"
              placeholder="I have to ..."
              onChange={ (event) => this.setState({text: event.target.value})}
            />
            <input 
              type="datetime-local"  
              className="form-control"
              onChange={ (event) => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            className="btn btn-success"
            onClick={ () => this.addReminder() }
          >
            Add Reminder
          </button>
        </div>

        {/* 渲染todos列表 */}
        { this.renderReminders() }
        <div
         className="btn btn-danger mt-3"
         onClick={ () => this.clearReminder() }
        >
          Clear Reminder
        </div>
      </div>
    );
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate)
    this.setState({
      text: ''
    })
  }

  delReminder(id) {
    this.props.delReminder(id)
  }

  clearReminder() {
    this.props.clearReminder()
  }

  renderReminders() {
    const { reminders } = this.props
    return (
      <ul className="list-group col-sm-8 mt-2">
        {
          reminders.map(reminder => (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div className="">{ reminder.text }</div>
                <div className=""><em>{ moment(new Date(reminder.dueDate)).fromNow() }</em></div>
              </div>
              <div
               className="list-item del-btn"
               onClick={ () => this.delReminder(reminder.id) }
              >
               &#x2715;
              </div>
            </li>
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  };
};

export default connect(mapStateToProps, { addReminder, delReminder, clearReminder })(App);