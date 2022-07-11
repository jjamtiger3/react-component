import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Component } from 'react';
import CustomButton from './components/button/CustomButton';
import CustomInput from './components/input/CustomInput';

class App extends Component {

  getValue = () => {
    alert('getValue');
  }
  
  render() {
   /**
    * 1. 클릭
    * 2. store로 getValue전송
    * 3. store에서 각 input의 value를 가져옴
    * 4. 각 input은 store에 연결되있어야 함
    */
    return (
     <div>
       <CustomButton classProps="fa fa-google" label='etValue' onClick={this.getValue}></CustomButton>
       <div>
         <label>카드번호: </label>
         <CustomInput classProps="default" mask='LLLL-LLLL-LLLL-LLLL'></CustomInput>
       </div>
       <div>
         <label>주민등록번호: </label>
         <CustomInput classProps="default" mask='LLLLLL-LLLLLLL'></CustomInput>
       </div>
       <div>
         <label>주민등록번호: </label>
         <CustomInput classProps="default" mask='LLLLLL-L******'></CustomInput>
       </div>
     </div>
    )
   };
}

// function App() {
//   return (
//     <div>
//       <CustomButton classProps="fa fa-google" label='etValue'></CustomButton>
//       <div>
//         <label>카드번호: </label>
//         <CustomInput classProps="default" mask='LLLL-LLLL-LLLL-LLLL'></CustomInput>
//       </div>
//       <div>
//         <label>주민등록번호: </label>
//         <CustomInput classProps="default" mask='LLLLLL-LLLLLLL'></CustomInput>
//       </div>
//       <div>
//         <label>주민등록번호: </label>
//         <CustomInput classProps="default" mask='LLLLLL-L******'></CustomInput>
//       </div>
//     </div>
//   );
// }

export default App;
