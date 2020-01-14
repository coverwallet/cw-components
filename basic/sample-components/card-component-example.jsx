import React from 'react';
import PropTypes from 'prop-types';

const ContentSample = ({
  iconClass,
  title,
  subtitle,
  tooltip,
  price,
  priceDescription,
  phone,
}) => (
  <div className="lob-card">
    <div className="lob-card__info-section">
      {iconClass && (
        <span className="lob-card__icon-container">
          <span className={iconClass}></span>
        </span>
      )}
      <div className="lob-card__name">
        <div className="lob-card__title">
          {title} {tooltip && <span>{tooltip}</span>}
        </div>
        {subtitle && <div className="lob-card__subtitle">{subtitle}</div>}
      </div>
    </div>
    <div className="lob-card__price-section">
      <div className="lob-card__price">{price}</div>
      <div className="lob-card__subtitle">{priceDescription}</div>
      <div className="lob-card__subtitle">
        <a>{phone}</a>
      </div>
    </div>
  </div>
);

ContentSample.propTypes = {
  iconClass: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tooltip: PropTypes.string,
  price: PropTypes.string,
  priceDescription: PropTypes.string,
  phone: PropTypes.string,
};

export default ContentSample;
