/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// Import local
import './style.scss';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    // J'initialise une variable qui représente une référence
    // Pour l'instant elle pointe vers rien, elle est juste en mémoire
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // componentDidMount étant déclanché APRES le render, la variable possède donc la vrai référence vers le component
    // Puisque la variable prends sa valeur pendant le render
    // Par contre attention, la variable est un objet avec une clef current qui représente le composant ( attention de ne pas l'oublier )
    this.inputRef.current.focus();
  }

  handleSubmit = (event) => {
    const { onSubmit, inputValue } = this.props;
    event.preventDefault();
    onSubmit(inputValue);
  };

  render() {
    const { inputValue, onInputChange } = this.props;
    return (
      <form className="addTaskForm" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef} // Ici au render, la variable this.inputRef va maintenant pointer vers ce component
          type="text"
          className="addTaskForm__input"
          placeholder="Ajouter une tâche"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
  inputValue: '',
  onInputChange: () => {},
};

export default Form;
