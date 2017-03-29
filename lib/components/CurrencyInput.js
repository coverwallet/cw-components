import React from 'react'
import numberWithCommas from '../utils/numberWithCommas'
import exists from '../utils/exists'

class CurrencyInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: this.convertNextValue(exists(props.value) ? props.value : '', props) }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value)
      this.setState({ value: this.convertNextValue(exists(nextProps.value) ? nextProps.value : '', nextProps) })
  }

  handleChange(e) {
    (/^[0-9.,]+$/.test(e.target.value)) ? this.setNextValue(e.target.value) : this.setNextValue('')
  }

  convertNextValue(value, props) {
    value = String(value).replace(/,/g, "")
    value = value.indexOf('0') !== -1 ? value : value || ''
    value = value !== '' ? parseInt(value) : value
    value = numberWithCommas(value)
    return value
  }

  setNextValue(value) {
    var nextValue = this.convertNextValue(value, this.props)
    this.setState({value: nextValue})
    this.props.setValue && this.props.setValue(nextValue)
  }

  pressKey(key) {
    var value = String(this.state.value).replace(/,/g, "")
    !value || value === 'NaN' ? value = `${key}` : value = value + '' + key
    this.setNextValue(value)
  }

  deleteKey() {
    var value = String(this.state.value).replace(/,/g, "")
    if (value && value.length > 0)
      this.setNextValue(value.substring(0, value.toString().length - 1) || '')
  }

  render() {
    let {min, width} = this.props
    return (
      <div className='currency-input' style={{width: width}}>
          <span className='currency-input'/>
          <input className='currency-input' ref='input' type='text' pattern='[0-9,-]*' inputMode='numeric' lang="en" min={min ? min : 0}
          onChange={this.handleChange.bind(this)} value={this.state.value}/>
      </div>
    )
  }
}

CurrencyInput.defaultProps = { type: 'number' }

export default CurrencyInput