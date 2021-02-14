import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import back from '../Background.png'

export default class InputSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleAddTaskToBackend = () => {};
  handleAddTask = (e) => {
    e.preventDefault();
    let taskObject = {};
    if (!this.state.task) return;
    taskObject.task = this.state.task;
    taskObject.createdAt = Date.now();
    let newTasks = [...this.state.tasks];
    newTasks.push(taskObject);
    this.setState({ tasks: newTasks }, () => this.setState({ task: "" }));
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div id="input-section-container">
        <div id="header-left-section">
            <img src={back} alt="" id="logo" />
          <h1>TASKFY</h1>
        </div>

        <div id="input-btn-container">
          <Input
            onChange={(e) => this.setState({ task: e.target.value })}
            value={this.state.task}
            fluid
            placeholder="Add a task ..."
            id="input"
          />
          <div id="add-btn-container">
            <Button primary onClick={this.handleAddTask} id="add-btn">
              Add Task
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
