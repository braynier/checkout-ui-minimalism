import { FormEvent, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form
      className="bg-neutral-100 [&>fieldset:first-of-type]:pt-6 [&>fieldset:last-of-type]:mb-0 [&>fieldset:last-of-type]:border-b-0 [&>fieldset:last-of-type]:pb-3"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
