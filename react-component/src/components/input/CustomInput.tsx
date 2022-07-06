import { InputProps } from '../../interfaces/Input.interface';
import { Component } from 'react';

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

  __applyOriginValue(value: string) {
    const { mask } = this.props;
    let _value;
    switch(mask) {
      case 'LLLL-LLLL-LLLL-LLLL':
        _value = value.replace(/[^0-9]/g, '');
        break;
      default:
        _value = value;
        break;
    }
    return _value;
  }

  __applyMaskedValue (originValue: string) {
    const { mask } = this.props;
    if (!mask) {
      return originValue;
    }
    let value: string;
    const appliedValue = this.__applyOriginValue(originValue);
    let length = appliedValue.length;
    const { regExp, repExp } = this.__makeNumberRegExp(mask, '-', length);
    switch(mask) {
      case 'LLLLLL-LLLLLLL': // 주민번호 패턴
        value = appliedValue.replace(new RegExp(regExp), repExp);
        break;
      case 'LLLL-LLLL-LLLL-LLLL': // 카드번호 패턴
        value = appliedValue.replace(new RegExp(regExp), repExp);
        break;
      default:
        value = originValue;
        break;
    }
    return value;
  }

  __makeNumberRegExp (mask: string, spliter: string, length: number) {
    const arrMask = mask.split(spliter);
    const regExps: string[] = [];
    const repExps: string[] = [];
    let _length: number = length;
    arrMask.forEach((_mask: string) => {
      let num;
      if (_length <= 0) {
        return;
      }
      if (_length > _mask.length || regExps.length === 0) {
        num = _mask.length;
        _length -= _mask.length;
      } else {
        num = `1,${_length}`;
        _length -= _mask.length;
      }
      regExps.push(`(\\d{${num}})`);
    });
    const cnt = regExps.length;
    for(let i = 0; i < cnt; i += 1) {
      repExps.push(`$${(i + 1)}`);
    }
    const regExp = regExps.join('');
    const repExp = repExps.join('-');
    return { regExp, repExp }
  }


  // state 구현
  // value state변경시 close버튼 구현
  // mask 구현
  // mask를 위해 설계가 필요함
  render () {
    return <div className="custom-input-container">
        <input className={this.props.classProps} maxLength={this.props.mask?.length} value={this.state.value} onChange={this.handleChange}></input>
        <span className="fa fa-close"></span>
      </div>
  }
}

export default CustomInput;
