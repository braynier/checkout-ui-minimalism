// import { ChangeEvent } from "react";

// type FormInputType = "text" | "email" | "number" | "radio";

// interface FormInputProps {
//   label: string;
//   id: string;
//   name: string;
//   placeholder: string;
//   value: string;
//   type: FormInputType;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }

// const FormInput = ({
//   label,
//   id,
//   name,
//   placeholder,
//   value,
//   type,
//   onChange,
// }: FormInputProps) => (
//   <div className="flex flex-1/2 flex-col">
//     <label className="sr-only" htmlFor={id}>
//       {label}
//     </label>
//     <input
//       className="ring-gray-lighter placeholder:text-gray-light rounded-md p-4 ring-1 placeholder:text-sm placeholder:font-normal"
//       id={id}
//       name={name}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//     />
//   </div>
// );

// export default FormInput;

import { ChangeEvent } from "react";

type FormInputType = "text" | "email" | "number" | "radio";

interface FormInputProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  type: FormInputType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  options?: {
    id: number;
    title: string;
    icons: React.FC<React.SVGProps<SVGSVGElement>>[];
  }[];
  checkedValue?: string;
}

const FormInput = ({
  label,
  id,
  name,
  placeholder,
  value,
  type,
  onChange,
  options = [],
  checkedValue,
}: FormInputProps) => {
  if (type === "radio") {
    return (
      <div className="flex flex-col">
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>

        <div>
          {options.map((option) => (
            <label
              key={option.id}
              className="bg-blue-light ring-blue-dark flex cursor-pointer items-center gap-4 rounded-md p-4 ring-1"
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={option.title}
                checked={checkedValue === option.title}
                onChange={onChange}
                className="h-5 w-5"
              />
              <span className="text-gray-darkest font-normal">
                {option.title}
              </span>
              <div className="flex gap-2">
                {option.icons.map((Icon, index) => (
                  <Icon key={index} />
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1/2 flex-col">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        className="ring-gray-lighter placeholder:text-gray-light rounded-md p-4 ring-1 placeholder:text-sm placeholder:font-normal"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
