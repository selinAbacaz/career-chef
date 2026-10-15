import type { ReactNode } from "react";
import "@css/components/NavButton.css";

interface NavButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  selected?: boolean;
  children?: ReactNode;
}

export function NavButton({
  selected = false,
  children,
  ...props
}: NavButtonProps) {
  return (
    <button
      {...props}
      className={`nav-button ${props.className} ${selected ? "selected" : ""}`}
    >
      {children}
    </button>
  );
}
