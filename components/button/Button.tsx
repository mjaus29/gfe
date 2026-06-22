import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ButtonProps = {
  href?: string;
  className?: string;
  size: keyof typeof sizes;
  variant: keyof typeof variants;
  icon?: IconComponent;
  iconSize?: "sm" | "md";
  iconOnly?: boolean;
  iconPosition?: "left" | "right";
  text?: string;
};

const base =
  "inline-flex items-center justify-center rounded font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const sizes = {
  sm: "px-3.5 py-2.5 gap-1 text-sm",
  md: "px-4 py-2.5 gap-1.5 text-base",
  lg: "px-5 py-3 gap-1.5 text-base",
  xl: "px-6 py-4 gap-2.5 text-lg",
  "2xl": "gap-2 p-4",
};

const linkSizes = {
  sm: "gap-1 text-sm",
  md: "gap-1.5 text-base",
  lg: "gap-1.5 text-base",
  xl: "gap-2.5 text-lg",
  "2xl": "gap-2",
};

const variants = {
  primary:
    "bg-indigo-700 text-white shadow-sm hover:bg-indigo-800 focus-visible:ring-indigo-700",

  secondary:
    "bg-white text-neutral-900 shadow-sm border border-neutral-200 hover:bg-neutral-200 focus-visible:ring-neutral-700",

  tertiary: "text-indigo-700 hover:bg-indigo-100 focus-visible:ring-indigo-700",

  link: "rounded-none p-0 text-indigo-700 focus-visible:ring-indigo-700 hover:bg-indigo-100",

  linkGray:
    "rounded-none p-0 text-neutral-600 focus-visible:ring-neutral-500 hover:bg-neutral-300",

  danger:
    "bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-600",
};

const Button = ({
  href = "#",
  className = "",
  size,
  variant,
  icon: Icon,
  iconSize = "sm",
  iconOnly,
  iconPosition = "right",
  text = "Button CTA",
}: ButtonProps) => {
  const isLinkVariant = variant === "link" || variant === "linkGray";
  const sizeClass = isLinkVariant ? linkSizes[size] : sizes[size];
  const iconClass = iconSize === "sm" ? "size-4 shrink-0" : "size-5 shrink-0";
  const classes = `${base} ${sizeClass} ${variants[variant]} ${className}`;

  return (
    <Link
      href={href}
      className={classes}
      aria-label={iconOnly ? text : undefined}
    >
      {Icon && iconPosition === "left" && (
        <Icon className={iconClass} aria-hidden="true" />
      )}
      {!iconOnly && <span>{text}</span>}
      {Icon && iconPosition === "right" && (
        <Icon className={iconClass} aria-hidden="true" />
      )}
    </Link>
  );
};
export default Button;
