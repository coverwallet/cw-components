import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardGroup = ({ items, className }) => {
  const CardClasses = classNames('card-group', className);
  return (
    <div className={CardClasses}>
      {items.map(item => (
        <div className="card-group__item">{item}</div>
      ))}
    </div>
  );
};

CardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

export default CardGroup;
