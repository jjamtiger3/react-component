import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Component } from 'react';
import CustomButton from './components/button/CustomButton';
import CustomInput from './components/input/CustomInput';

class App extends Component {
  cardNoInput: any;
  regNoInput: any;
  regNoMaskInput: any;

  getValue = () => {
    console.log(this.cardNoInput.getValue());
    console.log(this.cardNoInput.getOriginValue());
    console.log(this.regNoInput.getValue());
    console.log(this.regNoInput.getOriginValue());
    console.log(this.regNoMaskInput.getValue());
    console.log(this.regNoMaskInput.getOriginValue());
  }
  
  render() {
   /**
    * 1. 클릭(완)
    * 2. 각 input에 ref부착
    * 3. 클릭시 각 input에서 value값 가져옴
    */
    return (
     <div>
       <CustomButton classProps="fa fa-google" label='etValue' onClick={this.getValue}></CustomButton>
       <div>
         <label>카드번호: </label>
         <CustomInput ref={(ref) => (this.cardNoInput = ref)} classProps="default" mask='LLLL-LLLL-LLLL-LLLL'></CustomInput>
       </div>
       <div>
         <label>주민등록번호: </label>
         <CustomInput ref={(ref) => (this.regNoInput = ref)} classProps="default" mask='LLLLLL-LLLLLLL'></CustomInput>
       </div>
       <div>
         <label>주민등록번호: </label>
         <CustomInput ref={(ref) => (this.regNoMaskInput = ref)} classProps="default" mask='LLLLLL-L******'></CustomInput>
       </div>
     </div>
    )
   };
}

export default App;