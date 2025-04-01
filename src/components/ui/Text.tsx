import { ReactNode } from "react";

interface TextProps {
  size: "xs" | "sm" | "md" | "lg";
  color: "darkest" | "dark" | "light" | "lighter";
  bold?: boolean;
  position?: "left" | "center" | "right";
  children: ReactNode;
}

export const Text = ({
  size,
  color,
  bold = false,
  position = "left",
  children,
}: TextProps) => {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const colorClasses = {
    darkest: "text-gray-darkest",
    dark: "text-gray-dark",
    light: "text-gray-light",
    lighter: "text-gray-lighter",
  };

  const positionClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <p
      className={`min-w-fit lg:hidden ${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} ${bold ? "font-bold" : ""}`}
    >
      {children}
    </p>
  );
};
