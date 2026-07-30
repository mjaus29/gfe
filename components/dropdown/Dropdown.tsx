"use client";

import clsx from "clsx";
import { ComponentType, SVGProps, useState } from "react";
import {
  CheckIcon,
  DownIcon,
  PrivateIcon,
  PublicIcon,
  UnlistedIcon,
} from "../icons/Icons";

export type IconName = "private" | "public" | "unlisted";

export type Option = {
  value: string;
  label: string;
  icon: IconName;
  disabled?: boolean;
};

const icons: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  private: PrivateIcon,
  public: PublicIcon,
  unlisted: UnlistedIcon,
};

export default function Dropdown({ options }: Readonly<{ options: Option[] }>) {
  const [expanded, setExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <div className="flex w-68 flex-col items-center gap-1">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={expanded}
        aria-controls="privacy-options-menu"
        className="flex items-center gap-1 self-stretch rounded border-[0.5px] border-solid border-neutral-200 bg-white px-3 py-2 shadow-lg hover:bg-neutral-50 focus:outline-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex grow items-center px-0.5">
          <span className="text-sm font-medium text-neutral-900">
            Privacy options
          </span>
        </div>
        <DownIcon
          className={clsx(
            "h-[5.4015421867370605px] w-[8.838862419128418px] text-neutral-900 transition-transform duration-200",
            expanded && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      {expanded && (
        <div
          id="privacy-options-menu"
          role="menu"
          aria-label="Privacy options"
          className="flex flex-col gap-6 self-stretch rounded-lg bg-white p-2 shadow-lg"
        >
          <div className="flex flex-col gap-2">
            {options.map((option) => {
              const Icon = icons[option.icon];
              const isSelected = selectedValue === option.value;
              const isDisabled = option.disabled ?? false;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isSelected}
                  aria-disabled={isDisabled}
                  className={clsx(
                    "flex items-center justify-between gap-2 rounded px-2 py-1.5 hover:bg-neutral-50",
                    isSelected && "bg-gray-50",
                    isDisabled && "cursor-not-allowed opacity-50",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 focus-visible:ring-offset-2",
                  )}
                  onClick={() => {
                    if (isDisabled) return;
                    setSelectedValue(option.value);
                    setExpanded(false);
                  }}
                >
                  <div className="flex items-center gap-3 disabled:text-neutral-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium text-neutral-900">
                      {option.label}
                    </span>
                  </div>
                  {isSelected && (
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
