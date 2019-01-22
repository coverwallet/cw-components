import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getQuestionIconClass = props => classNames('question-icon', { [`question-icon--${props.type}`]: props.type });

function QuestionIcon({ accordion, infoText, className, ...props }) {
  return (
    <div className={`${getQuestionIconClass(props)} ${className}`} {...props}>
      {!accordion && <span className="question-icon__tooltip-text">{infoText}</span>}
    </div>
  );
}

QuestionIcon.propTypes = {
  accordion: PropTypes.bool,
  type: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  infoText: PropTypes.string,
};

export default QuestionIcon;
