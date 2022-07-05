import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import CustomButton from './components/button/CustomButton';
import CustomInput from './components/input/CustomInput';

function App() {
  return (
    <div>
      <CustomInput classProps="default" mask='LLLL-LLLL-LLLL-LLLL'></CustomInput>
    </div>
  );
}

export default App;
