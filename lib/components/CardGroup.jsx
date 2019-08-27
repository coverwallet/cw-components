import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => (
  <div className="card-group__item">{children}</div>
);

Card.propTypes = {
  children: PropTypes.any,
};

const CardGroup = ({ items }) => (
  <div className="card-group">
    {items.map(item => (
      <Card>{item}</Card>
    ))}
  </div>
);

CardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardGroup;
