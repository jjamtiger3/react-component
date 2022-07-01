import { InputProps } from '../../interfaces/Input.interface';
import { CustomInputState } from '../../store/CustomInput.store';
import { Component } from 'react';
import './CustomInput.css';

class CustomInput extends Component<InputProps, CustomInputState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (props: InputProps) {
    super(props);
    this.state = {
      displayValue: '',
      originValue: ''
    }
  }

  // state 구현
  // value state변경시 close버튼 구현
  // mask 구현
  // mask를 위해 설계가 필요함
  render () {
    return <input className={this.props.classProps} value={this.state.displayValue} onChange={this.handleChange}></input>
  }

  handleChange($event: any) {
  }
}

export default CustomInput;
