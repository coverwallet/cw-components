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
    });
  };

  render() {
    const { closed } = this.state;
    const { type, title, subtitle, subtitleMobile, largeTitle, largeTitleMobile, titleMobile, onClose, dataTest } = this.props;
    if (!onClose && closed) {
      return false;
    }
    const notificationClass = classNames(
      'cw-flash-notification',
      `cw-flash-notification--${type}`
    );

    const handleClose = onClose || this.closeNotification;

    return (
      <div className={notificationClass} data-test={dataTest}>
        <aside className="cw-flash-notification__icon-container">
          <i className="cw-flash-notification__icon" />
        </aside>
        <div className="cw-flash-notification__content">
          {title && <h4 className="cw-flash-notification__title title-desktop">{title}</h4>}
          {title && <h4 className="cw-flash-notification__title title-tablet">{titleMobile ? titleMobile : title}</h4>}
          <div className="description-desktop">
              {largeTitle && <h5 className="cw-flash-notification__title-large">{largeTitle}</h5>}
              {subtitle && <h5 className="cw-flash-notification__description">{subtitle}</h5>}
          </div>
          <div className="description-tablet">
              {largeTitle && <h5 className="cw-flash-notification__title-large">{largeTitleMobile ? largeTitleMobile : largeTitle}</h5>}
              {subtitle && <h5 className="cw-flash-notification__description">{subtitleMobile ? subtitleMobile : subtitle}</h5>}
          </div>
          <div className="cw-flash-notification__children">{this.props.children}</div>
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
  largeTitle: PropTypes.string,
  subtitle: PropTypes.string,
  onClose: PropTypes.func,
  subtitleMobile: PropTypes.string,
  largeTitleMobile: PropTypes.string,
  titleMobile: PropTypes.string,
  dataTest: PropTypes.string,
};

export default CwFlashNotification;
