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
    for(var i = 9; i >= 0; i--) {
      if(i > 0) {
        numbers.push(<div key={i} className='number' onClick={this.click.bind(this, i)}>{i}</div>);
      } else {
        numbers.push(<div key={i} className='number number--0' onClick={this.click.bind(this, i)}>{i}</div>);
      }
    }
    numbers.push(<div key='10' className='delete onlyclick-backspace' onClick={this.delete.bind(this)}></div>);
    return (
      <div className="keyboard">
        {numbers}
      </div>
    );
  }
}

export default Keyboard;
