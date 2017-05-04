import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FlashNotification = (props) => {
  const { type, title, subtitle, onClose } = props;
  const notificationClass = classNames(
    'flash-notification',
    `flash-notification--${type}`
  );

  return (
    <div className={notificationClass}>
      <aside className="flash-notification__icon"></aside>
      <div className="flash-notification__content">
        <h4 className="flash-notification__title">{title}</h4>
        <h5 className="flash-notification__description">Claro que si wapi yo soy el subtitle</h5>
      </div>
      <div className="flash-notification__controls">
        <a className="flash-notification__close">
          <i className="styleguide-icon-employee"></i>
        </a>
      </div>
    </div>
  );
};

FlashNotification.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default FlashNotification;
