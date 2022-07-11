import { ButtonProps } from '../../interfaces/Button.interface';

function CustomButton(props: ButtonProps) {
  return (
    <button
      className={props.classProps}
      onClick={props.onClick}
    >
      {props.prefixIcon && <i className={props.prefixIcon}></i>}
      {props.label}
    </button>
  );
}

export default CustomButton;
