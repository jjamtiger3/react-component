import { InputProps } from '../../interfaces/Input.interface';
import { Component, useMemo } from 'react';

import './CustomInput.css';

class CustomInput extends Component<InputProps> {
  state = {
    value: ''
  }
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (props: InputProps) {
    super(props);
  }

  handleChange = (e: any) => {
    const { value } = e.target;
    const maskedValue = this.__applyMaskedValue(value);
    this.setState({
      value: maskedValue
    });
  }

  __applyOriginValue() {
    const { mask } = this.props;
    let value;
    switch(mask) {
      case 'LLLL-LLLL-LLLL-LLLL':
        const regExp: RegExp = new RegExp(/[^0-9]/);
        value = this.state.value.replace(regExp, '');
        break;
      default:
        value = this.state.value;
        break;
    }
    return value;
  }

  __applyMaskedValue (originValue: string) {
    const { mask } = this.props;
    let value;
    switch(mask) {
      case 'LLLL-LLLL-LLLL-LLLL':
        const regExp: RegExp = new RegExp('(\\d{4})(\\d{1,4})(\\d{1,4})(\\d{1,4})');
        /**
         * 1. originValue의 길이를 구한다
         * 2. 길이에 따라 정규식을 만든다 ex) 5글자면 (\\d{4})(\\d{1,1})
         * 3. 길이에 따라 변환식을 만든다 ex) 5글자면 $1-$2
         */
        value = originValue.replace(regExp, '$1-$2-$3-$4');
        break;
      default:
        value = originValue;
        break;
    }
    return value;
  }


  // state 구현
  // value state변경시 close버튼 구현
  // mask 구현
  // mask를 위해 설계가 필요함
  render () {
    return <div className="custom-input-container">
        <input className={this.props.classProps} value={this.state.value} onChange={this.handleChange}></input>
        <span className="fa fa-close"></span>
      </div>
  }
}

export default CustomInput;
