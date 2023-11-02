import { ReactNode } from "react";

interface StyledButtonProps {
  variant: "primary" | "secondary";
  children: ReactNode;
}

export default function Button({ variant, children }: StyledButtonProps) {
  return <div className={`button ${variant}`}>{children}</div>;
}
