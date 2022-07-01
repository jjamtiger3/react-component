import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import CustomButton from './components/button/CustomButton';
import CustomInput from './components/input/CustomInput';

function App() {
  return (
    <div>
      <CustomButton label="커스텀버튼" prefixIcon='fa fa-chevron-left'></CustomButton>
      <CustomButton label="커스텀버튼" prefixIcon='fa fa-chevron-right'></CustomButton>
      <CustomButton label="커스텀버튼" prefixIcon='fa fa-chevron-up'></CustomButton>
      <CustomButton label="커스텀버튼" prefixIcon='fa fa-chevron-down'></CustomButton>
      <CustomInput classProps='default'></CustomInput>
    </div>
  );
}

export default App;
