import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CwFlashNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: false,
    };
  }

  closeNotification = () => {
    this.setState({
      closed: true,
    })
  };

  render() {
    const { closed } = this.state;
    const { type, title, subtitle, title_small, onClose } = this.props;
    if (!onClose && closed) {
      return false;
    }
    const notificationClass = classNames(
      'cw-flash-notification',
      `cw-flash-notification--${type}`
    );

    const handleClose = onClose || this.closeNotification;

    return (
      <div className={notificationClass}>
        <aside className="cw-flash-notification__icon-container">
          <i className="cw-flash-notification__icon" />
        </aside>
        <div className="cw-flash-notification__content">
          {title && <h4 className="cw-flash-notification__title">{title}</h4>}
          {title_small && <h5 className="cw-flash-notification__title-small">{title_small}</h5>}
          {subtitle && <h5 className="cw-flash-notification__description">{subtitle}</h5>}
          <h5 className="cw-flash-notification__text">{this.props.children}</h5>
        </div>
        <div className="cw-flash-notification__controls">
          <a className="cw-flash-notification__close" onClick={handleClose}>
            <i className="cw-flash-notification__close-icon" />
          </a>
        </div>
      </div>
    );
  }
}

CwFlashNotification.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  title_small: PropTypes.string,
  subtitle: PropTypes.string,
  onClose: PropTypes.func,
};

export default CwFlashNotification;
