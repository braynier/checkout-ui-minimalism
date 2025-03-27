import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isDisabled?: boolean;
}

const Button = ({ isDisabled, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-green-primary hover:bg-green-secondary font-poppins w-full rounded-sm pt-3 pr-8 pb-3 pl-8 text-sm font-bold tracking-widest text-white uppercase shadow-lg transition-all hover:cursor-pointer focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
