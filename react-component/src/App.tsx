import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import CustomButton from './components/button/CustomButton';
import CustomInput from './components/input/CustomInput';

function App() {
  return (
    <div>
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
  );
}

export default App;
