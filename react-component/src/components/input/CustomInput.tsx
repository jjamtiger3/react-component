import { InputProps } from '../../interfaces/Input.interface';
import './CustomInput.css';


function CustomButton(props: InputProps) {
  function handleChange ($event: any) {
    console.log($event.target.value);
  }
  return (
    <input className={props.classProps} onChange={handleChange}></input>
  );
}

export default CustomButton;
