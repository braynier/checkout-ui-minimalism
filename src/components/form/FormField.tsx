import { ReactNode } from "react";
import Heading from "../ui/Heading";

interface FieldGroupProps {
  title: string;
  children: ReactNode;
  hiddenOnLg?: boolean;
}

const FormFieldGroup = ({
  title,
  children,
  hiddenOnLg = false,
}: FieldGroupProps) => {
  const hiddenClass = hiddenOnLg ? "lg:hidden" : "";

  return (
    <fieldset
      className={`border-gray-lighter mb-4 flex flex-col border-y bg-white p-4 first-of-type:pt-6 last-of-type:mb-0 last-of-type:border-0 last-of-type:pb-3 lg:mb-0 lg:border-0 ${hiddenClass}`}
    >
      <legend className="float-left mb-3 lg:hidden">
        <Heading text={title} />
      </legend>

      <div className="flex flex-col gap-4 [&>p]:-mb-1">{children}</div>
    </fieldset>
  );
};

export default FormFieldGroup;
