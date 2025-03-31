import { UseFormRegisterReturn } from "react-hook-form";
import Arrow from "../icons/Arrow";

interface FormSelectInputProps {
  id: string;
  label: string;
  options: string[];
  error?: string;
  register: UseFormRegisterReturn;
}

const FormSelectInput = ({
  id,
  label,
  options,
  error,
  register,
}: FormSelectInputProps) => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative flex flex-col">
        <select
          id={id}
          className={`${error ? "border-red-500" : ""}`}
          {...register}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label
          className="text-gray-light absolute transform pt-3 pl-4 text-xs"
          htmlFor={id}
        >
          {label}
        </label>
        <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 pr-4">
          <Arrow />
        </div>
        {error && (
          <span className="mt-1 ml-1 text-sm text-red-500">{error}</span>
        )}
      </div>
    </div>
  );
};

export default FormSelectInput;
