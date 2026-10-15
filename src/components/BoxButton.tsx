import type { ReactNode } from "react";
import "@css/components/BoxButton.css";

interface BoxButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children?: ReactNode;
}

export function BoxButton({ children, ...props }: BoxButtonProps) {
  return (
    <button {...props} className={`box-button-format ${props.className}`}>
      {children}
    </button>
  );
}
