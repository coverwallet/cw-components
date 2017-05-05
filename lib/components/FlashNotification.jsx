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
      <aside className="flash-notification__icon-container">
        <i className="flash-notification__icon"></i>
      </aside>
      <div className="flash-notification__content">
        <h4 className="flash-notification__title">{title}</h4>
        {typeof subtitle !== 'undefined' && (<h5 className="flash-notification__description">{subtitle}</h5>)}
      </div>
      <div className="flash-notification__controls">
        {props.children}
        <a className="flash-notification__close" onClick={onClose}>
          <i className="flash-notification__close-icon"></i>
        </a>
      </div>
    </div>
  );
};

FlashNotification.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default FlashNotification;
