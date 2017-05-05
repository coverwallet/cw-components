import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CwFlashNotification = (props) => {
  const { type, title, subtitle, onClose } = props;
  const notificationClass = classNames(
    'cw-flash-notification',
    `cw-flash-notification--${type}`
  );

  return (
    <div className={notificationClass}>
      <aside className="cw-flash-notification__icon-container">
        <i className="cw-flash-notification__icon"></i>
      </aside>
      <div className="cw-flash-notification__content">
        <h4 className="cw-flash-notification__title">{title}</h4>
        {typeof subtitle !== 'undefined' && (<h5 className="cw-flash-notification__description">{subtitle}</h5>)}
      </div>
      <div className="cw-flash-notification__controls">
        {props.children}
        <a className="cw-flash-notification__close" onClick={onClose}>
          <i className="cw-flash-notification__close-icon"></i>
        </a>
      </div>
    </div>
  );
};

CwFlashNotification.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default CwFlashNotification;
