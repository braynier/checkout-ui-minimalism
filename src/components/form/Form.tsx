import { FormEvent, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form className="w-full bg-neutral-100" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
