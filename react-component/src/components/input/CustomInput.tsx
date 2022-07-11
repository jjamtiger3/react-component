import { InputProps } from '../../interfaces/Input.interface';
import { Component } from 'react';

import './CustomInput.css';
import { CharInterface } from './CharInterface';

class CustomInput extends Component<InputProps> {
  state = {
    value: '',
    originValue: '',
    chars: []
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

  getValue() {
    return this.state.value;
  }

  getOriginValue() {
    return this.state.originValue;
  }

  clear = (e: any) => {
    this.setState({
      value: '',
      originValue: ''
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
      case 'LLLLLL-L******': // TODO 주민번호 마스킹 패턴
        /**
         * 1. 타이핑시 글자가 타이핑됌
         * 2. 타이핑된 글자가 현재 패턴이 *자리인 경우 *을 씌움 ex) 111111-22인경우 111111-2*로 치환
         * 3. 치환전 값을 originValue에 저장(*가 있건 없건 originValue에 저장)
         * 4. 치환된 값을 value에 저장
         * 5. __applyOriginValue호출시 originValue에서 가져옴
         * 6. 추후 다른 패턴에서 originValue사용하도록 수정
         */
        value = appliedValue.replace(new RegExp(regExp), repExp);
        const { chars } = this.state;
        const arr_value: string[] = value.split('');
        for(let i = 0; i < chars.length; i += 1) {
          const char_obj: CharInterface = chars[i];
          if (char_obj.index >= value.length) {
            break;
          }
          arr_value[char_obj.index] = char_obj.char;
        }
        const new_value = arr_value.join('');
        this.setState({
          originValue: value,
          value: new_value
        });
        value = new_value;
        break;
      case 'LLLL-****-****-LLLL': // TODO 카드번호 마스킹 패턴
        value = originValue;
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
        <span className={`fa fa-close ${this.state.value ? '' : 'hide'}`} onClick={this.clear}></span>
      </div>
  }
  
  componentDidMount() {
    if (this.props.mask) {
      const masks: string[] = this.props.mask.split('');
      const chars = masks.map((m, index) => {
        if(m === '*') {
            return { index, char: m }
        }
        return null;
      }).filter((m) => {
          return m;
      });
      this.setState({
        chars
      });
    }
  }
}

export default CustomInput;
