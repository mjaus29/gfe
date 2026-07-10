type BadgeProps = {
  variant: keyof typeof variants;
  size: keyof typeof sizes;
  label?: string;
};

const base = "flex items-center rounded-full border border-solid";

const sizes = {
  sm: "px-1.5 py-0.5 text-xs",
  md: "px-2 py-0.5 text-sm",
  lg: "px-2.5 py-1 text-sm",
};

const variants = {
  neutral: "bg-gray-50 text-neutral-600 border-neutral-200",

  danger: "bg-red-50 text-red-600 border-red-200",

  warning: "bg-amber-50 text-amber-700 border-amber-200",

  success: "bg-green-50 text-green-700 border-green-200",

  brand: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const Badge = ({ variant, size, label }: BadgeProps) => {
  const classes = `${base} ${variants[variant]} ${sizes[size]}`;

  return <span className={classes}>{label}</span>;
};
export default Badge;
