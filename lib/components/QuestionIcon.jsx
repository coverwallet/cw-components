import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getQuestionIconClass = props => classNames('question-icon', { [`question-icon--${props.type}`]: props.type });

const QuestionIcon = ({ className, ...props }) => (
  <div className={`${getQuestionIconClass(props)} ${className}`} {...props}>
    ?
  </div>
);

QuestionIcon.propTypes = {
  type: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default QuestionIcon;
