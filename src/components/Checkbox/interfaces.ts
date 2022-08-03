import { InputHTMLAttributes } from "react";

export interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  error: boolean;
}
