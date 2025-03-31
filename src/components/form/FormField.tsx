import { ReactNode } from "react";
import Heading from "../ui/Heading";

interface FieldGroupProps {
  title: string;
  children: ReactNode;
}

const FormFieldGroup = ({ title, children }: FieldGroupProps) => (
  <fieldset className="border-gray-lighter mb-4 flex flex-col gap-4 border-y bg-white p-4">
    <legend className="float-left">
      <Heading text={title} />
    </legend>
    {children}
  </fieldset>
);

export default FormFieldGroup;
