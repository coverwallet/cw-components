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
    var numbers = [];
    [7, 8, 9, 6, 4, 5, 1, 2, 3, 0].forEach((i) => {
      if(i > 0) {
        numbers.push(<div key={i} className='keyboard__number' onClick={this.click.bind(this, i)}>{i}</div>);
      } else {
        numbers.push(<div key={i} className='keyboard__number keyboard__number--0' onClick={this.click.bind(this, i)}>{i}</div>);
      }
    });
    numbers.push(<div key='10' className='keyboard__delete keyboard__backspace' onClick={this.delete.bind(this)}></div>);
    return (
      <div className="keyboard">
        {numbers}
      </div>
    );
  }
}

export default Keyboard;
