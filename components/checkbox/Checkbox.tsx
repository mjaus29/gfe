"use client";

import { cn } from "@/lib/utils";
import { useEffect, useId, useRef } from "react";

type CheckboxState = "unchecked" | "checked" | "indeterminate";

type CheckboxProps = {
  state?: CheckboxState;
  label: string;
  className?: string;
};

const Checkbox = ({ state = "unchecked", label, className }: CheckboxProps) => {
  const id = useId();
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = state === "indeterminate";
    }
  }, [state]);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <input
        ref={checkboxRef}
        id={id}
        type="checkbox"
        checked={state === "checked"}
        readOnly
        className={cn(
          "h-4 w-4 rounded accent-indigo-600",
          "focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:ring-offset-0 focus-visible:outline-none",
        )}
      />
      <label htmlFor={id} className="text-base leading-6 text-neutral-600">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
