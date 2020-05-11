/*
 * @Author: your name
 * @Date: 2020-05-11 12:53:38
 * @LastEditTime: 2020-05-11 13:14:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reminder-review/src/components/App.js
 */
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">
            <input 
              type="text" 
              className="form-control"
              placeholder="I have to ..."
              onChange={ (event) => this.setState({text: event.target.value})}
            />
          </div>
          <button
            className="btn btn-success"
          >
            Add Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default App;