import { CSSProperties, ReactNode } from "react";

interface StyledButtonProps {
  variant: "primary" | "secondary";
  children: ReactNode;
  style?: CSSProperties;
}

export default function Button({
  variant,
  children,
  style,
}: StyledButtonProps) {
  return (
    <div style={style} className={`button ${variant}`}>
      {children}
    </div>
  );
}
