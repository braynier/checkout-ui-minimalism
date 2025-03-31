import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isDisabled?: boolean;
}

const Button = ({ isDisabled, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-green-primary hover:bg-green-secondary font-poppins focus:ring-green-secondary w-full rounded-sm pt-3 pr-8 pb-3 pl-8 text-sm font-bold tracking-widest text-white uppercase shadow-[0_4px_10px_0_rgba(67,40,16,0.24)] transition-all hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:outline-none ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
