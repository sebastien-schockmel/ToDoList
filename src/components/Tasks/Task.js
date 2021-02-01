/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

// Import local
import './style.scss';

const Task = ({ id, label, done, onCheckbox }) => (
  <li className={done ? 'task task--checked' : 'task'}>
    <input
      id={`task-${id}`}
      className="task__checkbox"
      type="checkbox"
      checked={done}
      onChange={onCheckbox(id)}
    />
    <label htmlFor={`task-${id}`} className="task__label">
      {label}
    </label>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  done: PropTypes.bool,
  onCheckbox: PropTypes.func,
};

Task.defaultProps = {
  label: 'Tâche non nommée',
  onCheckbox: () => {},
  done: false,
};

export default Task;
