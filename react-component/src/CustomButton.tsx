import { ButtonProps } from './Button.interface';

function CustomButton(props: ButtonProps) {
  return (
    <button
      className={props.classProps}
    >
      {props.prefixIcon && <i className={props.prefixIcon}></i>}
      {props.label}
    </button>
  );
}

export default CustomButton;
