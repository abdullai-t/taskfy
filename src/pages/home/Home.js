import React, { Component } from "react";
import InputSection from "../../reusables/InputSection";
import TaskItem from "../../reusables/TaskItem";

export default class Home extends Component {
  render() {
    return (
      <div>
        <InputSection />
        <div id="task-list-container">
          <TaskItem />
        </div>
      </div>
    );
  }
}
