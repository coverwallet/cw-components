import React from 'react';
import PropTypes from 'prop-types';

class Keyboard extends React.Component {
  click(key) {
    if (this.props.pressKey) {
      this.props.pressKey(key);
    }
  }

  delete = () => {
    if (this.props.deleteKey) {
      this.props.deleteKey();
    }
  }

  render() {
    const { dashKey, dashKeyActive } = this.props;

    return (
      <table className="keyboard">
        <tbody>
          <tr className="keyboard__row">
            {[7, 8, 9].map(i => <td key={i} className="keyboard__number" onClick={() => this.click(i)}>{i}</td>)}
          </tr>
          <tr className="keyboard__row">
            {[4, 5, 6].map(i => <td key={i} className="keyboard__number" onClick={() => this.click(i)}>{i}</td>)}
          </tr>
          <tr className="keyboard__row">
            {[1, 2, 3].map(i => <td key={i} className="keyboard__number" onClick={() => this.click(i)}>{i}</td>)}
          </tr>
          <tr className="keyboard__row">
            {dashKey && (
              <td
                className="keyboard__number"
                style={{color: dashKeyActive ? 'red' : ''}}
                onClick={dashKey}
              >-</td>
            )}
            <td className="keyboard__number keyboard__number--0" colSpan={dashKey ? '1' : '2'} onClick={() => this.click(0)}>0</td>
            <td key="10" className="keyboard__delete keyboard__backspace" onClick={this.delete} />
          </tr>
        </tbody>
      </table>
    );
  }
}

Keyboard.propTypes = {
  pressKey: PropTypes.func.isRequired,
  deleteKey: PropTypes.func.isRequired,
  dashKey: PropTypes.func,
  dashKeyActive: PropTypes.bool,
};

export default Keyboard;
