import { UseFormRegisterReturn } from "react-hook-form";

type FormInputType = "text" | "email" | "number" | "radio";

interface FormInputProps {
  label: string;
  id: string;
  placeholder?: string;
  type: FormInputType;
  error?: string;
  options?: {
    id: number;
    title: string;
    icons: React.FC<React.SVGProps<SVGSVGElement>>[];
  }[];
  register: UseFormRegisterReturn;
  hiddenOnLg?: boolean;
}

const FormInput = ({
  label,
  id,
  placeholder,
  type,
  error,
  options = [],
  register,
  hiddenOnLg = false,
}: FormInputProps) => {
  const hiddenClass = hiddenOnLg ? "lg:hidden" : "";

  if (type === "radio") {
    return (
      <div className={`flex w-full flex-col ${hiddenClass}`}>
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        {error && <span className="mb-2 text-sm text-red-500">{error}</span>}
        <div className="space-y-2">
          {options.map((option) => (
            <label
              key={option.id}
              className="bg-blue-light border-blue-dark flex cursor-pointer items-center gap-4 rounded-t-md border p-4"
            >
              <input
                type="radio"
                id={id}
                value={option.title}
                {...register}
                className="h-5 w-5"
              />
              <span className="text-gray-darkest text-sm font-normal">
                {option.title}
              </span>
              <div className="flex gap-1">
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
    <div className={`flex w-full flex-col ${hiddenClass}`}>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${error ? "border-red-500" : ""}`}
        {...register}
      />
      {error && <span className="mt-1 ml-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default FormInput;
