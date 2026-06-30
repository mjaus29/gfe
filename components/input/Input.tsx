import { ComponentType, SVGProps } from "react";
import { HintIcon } from "../icons/Icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type InputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  className?: string;
  icon?: IconComponent;
  iconPosition?: "left" | "right";
};

const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  hint,
  error,
  className = "",
  icon: Icon,
  iconPosition = "left",
}: InputProps) => {
  const hasError = Boolean(error);
  const iconClass = hasError ? "text-red-600" : "text-neutral-500";

  let descriptionId: string | undefined;

  if (hasError) {
    descriptionId = `${id}-error`;
  } else if (hint) {
    descriptionId = `${id}-hint`;
  }

  return (
    <div className="flex w-full max-w-85 flex-col gap-1.5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-neutral-700">
          {label}
        </label>

        <div
          className={`flex items-center gap-2 rounded border border-solid bg-neutral-50 px-3.5 py-2.5 focus-within:ring-4 ${
            hasError
              ? "border-red-300 focus-within:border-red-300 focus-within:ring-red-600/10"
              : "border-neutral-200 focus-within:border-indigo-600 focus-within:ring-indigo-600/10"
          }`}
        >
          {Icon && iconPosition === "left" && (
            <Icon
              className={`${iconClass} size-4 shrink-0`}
              aria-hidden="true"
            />
          )}

          <input
            id={id}
            type={type}
            placeholder={placeholder}
            aria-invalid={hasError || undefined}
            aria-errormessage={hasError ? descriptionId : undefined}
            aria-describedby={descriptionId}
            className={`min-w-0 flex-1 bg-transparent outline-hidden ${className} `}
          />

          <HintIcon
            className={`${iconClass} size-4 shrink-0`}
            aria-hidden="true"
          />
        </div>
      </div>
      {error && (
        <span id={descriptionId} className={`${iconClass} text-sm font-normal`}>
          {error}
        </span>
      )}
      {hint && !error && (
        <span id={descriptionId} className={`${iconClass} text-sm font-normal`}>
          {hint}
        </span>
      )}{" "}
    </div>
  );
};
export default Input;
