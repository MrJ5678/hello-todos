/*
 * @Author: your name
 * @Date: 2020-05-11 12:53:38
 * @LastEditTime: 2020-05-11 16:17:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reminder-review/src/components/App.js
 */
import React, { Component } from 'react';
import { addReminder } from '../actions'
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
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
              className="form-control"
              placeholder="I have to ..."
              onChange={ (event) => this.setState({text: event.target.value})}
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
      </div>
    );
  }

  addReminder() {
    this.props.addReminder(this.state.text)
    this.setState({
      text: ''
    })
  }

  renderReminders() {
    const { reminders } = this.props
    return (
      <ul className="list-group col-sm-8 mt-2">
        {
          reminders.map(reminder => (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div className="">{reminder.text}</div>
                <div className=""><em>time</em></div>
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

export default connect(mapStateToProps, { addReminder })(App);