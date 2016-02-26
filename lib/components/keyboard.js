import React from 'react';

class Keyboard extends React.Component {

  click (key) {
    if(this.props.pressKey) {
      this.props.pressKey(key);
    }
  }
  delete () {
    if(this.props.deleteKey) {
      this.props.deleteKey();
    }
  }
  render () {
    return (
      <table className='keyboard'>
        <tbody>
          <tr className='keyboard__row'>
            {[7, 8, 9].map((i) => <td key={i} className='keyboard__number' onClick={this.click.bind(this, i)}>{i}</td>)}
          </tr>
          <tr className='keyboard__row'>
            {[4, 5, 6].map((i) => <td key={i} className='keyboard__number' onClick={this.click.bind(this, i)}>{i}</td>)}
          </tr>
          <tr className='keyboard__row'>
            {[1, 2, 3].map((i) => <td key={i} className='keyboard__number' onClick={this.click.bind(this, i)}>{i}</td>)}
          </tr>
          <tr className='keyboard__row'>
            <td className='keyboard__number keyboard__number--0' colSpan='2' onClick={this.click.bind(this, 0)}>0</td>
            <td key='10' className='keyboard__delete keyboard__backspace' onClick={this.delete.bind(this)}></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Keyboard;
