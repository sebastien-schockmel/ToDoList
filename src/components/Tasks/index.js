import React from 'react';
import PropTypes from 'prop-types';
// Import local
import Task from './Task';
import './style.scss';

const Tasks = ({ tasks, onTaskCheckbox }) => (
  <div className="tasks">
    <ul className="taskList">
      { tasks.map((task) => (
        <Task {...task} key={task.id} onCheckbox={onTaskCheckbox} />
      ))}
    </ul>
  </div>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      done: PropTypes.done,
    }),
  ),
  onTaskCheckbox: PropTypes.func,
};

Tasks.defaultProps = {
  tasks: [],
  onTaskCheckbox: () => {},
};

export default Tasks;
