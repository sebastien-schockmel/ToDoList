/* eslint-disable no-plusplus */
// == Import npm
import React, { PureComponent } from 'react';

// == Import
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

import tasksData from 'src/data/tasks';

import './styles.scss';

// == Composant
class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      taskInputLabel: '',
      tasks: tasksData,
    };
  }

  handleTaskInputLabelChange = (event) => {
    this.setState({
      taskInputLabel: event.target.value,
    });
  }

  // Fonction déclenchée quand on coche/décoche une case
  // Ici c'est une double fléchée ( closure )
  handleTaskCheckbox = (taskId) => () => {
    // on prend toutes les tâches
    const { tasks } = this.state;

    // on transpose vers un nouveau tableau
    const tasksModified = tasks.map((task) => {
      // on agit uniquement sur la tâche qui nous intéresse
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({
      tasks: tasksModified,
    });
  }

  addTask = (label, done = false) => {
    const { tasks } = this.state;
    // On cherche l'id le plus haut de nos taches
    let maxID = Math.max(...tasks.map((task) => task.id));
    // Et on ajoute la tache dans le tableau
    this.setState({
      tasks: [...tasks, { id: ++maxID, label, done }],
      taskInputLabel: '',
    });
  }

  render() {
    // On destructure l'objet state
    const { taskInputLabel, tasks } = this.state;

    // On filtre les taches pour ne récupérer que celles qui NE sont PAS terminées
    const nbProcessingTasks = tasks.filter((task) => !task.done).length;

    return (
      <div className="todoList">
        <Form
          inputValue={taskInputLabel}
          onInputChange={this.handleTaskInputLabelChange}
          onSubmit={this.addTask}
        />
        <Counter nbTask={nbProcessingTasks} />
        <Tasks tasks={tasks} onTaskCheckbox={this.handleTaskCheckbox} />
      </div>
    );
  }
}

// == Export
export default TodoList;
