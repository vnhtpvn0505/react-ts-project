import React, { Component } from 'react';
import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';
import { TasksList } from './components/TaskList';

interface State {
  newTask: Task;
  tasks: Task[];
}
class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: 'Tesst'
    },
    tasks: []
  };

  private addTask = (event: any) => {
    event.preventDefault();
    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ''
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  };

  private handleTaskChange = (event: any) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  private deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };
  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <NewTaskForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} />
      </div>
    );
  }
}

export default App;
