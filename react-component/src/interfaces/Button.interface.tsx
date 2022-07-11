import { BasicProps } from "interfaces/Basic";

export interface ButtonProps extends BasicProps {
    prefixIcon?: string;
    label?: string;
    onClick?: any;
}