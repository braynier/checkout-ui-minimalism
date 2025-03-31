import { ChangeEvent } from "react";
import Arrow from "../icons/Arrow";

interface FormSelectInputProps {
  id: string;
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelectInput = ({
  id,
  label,
  name,
  value,
  options,
  onChange,
}: FormSelectInputProps) => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative flex h-full flex-col">
        <select id={id} name={name} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label
          className="absolute transform pt-3 pl-4 text-xs text-[#828282]"
          htmlFor={id}
        >
          {label}
        </label>

        <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 pr-4">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default FormSelectInput;
