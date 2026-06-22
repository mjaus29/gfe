import Button from "@/components/button/Button";
import { StarIcon } from "@/components/icons/Icons";

const variants = [
  "primary",
  "secondary",
  "tertiary",
  "link",
  "linkGray",
  "danger",
] as const;

const buttonConfigs = [
  { size: "sm" },
  {
    size: "md",
    icon: StarIcon,
    iconSize: "sm",
    iconPosition: "left",
  },
  {
    size: "lg",
    icon: StarIcon,
    iconSize: "sm",
    iconPosition: "right",
  },
  { size: "xl" },
  {
    size: "2xl",
    icon: StarIcon,
    iconOnly: true,
    iconSize: "md",
  },
] as const;

const ButtonPage = () => {
  return (
    <div className="container-layout bg-layout bg-white">
      <div className="mt-28 flex h-full flex-col gap-8 md:gap-10 lg:gap-12">
        {variants.map((variant) => (
          <div
            key={variant}
            className="flex flex-wrap items-center gap-4 md:gap-5"
          >
            {buttonConfigs.map((config, index) => (
              <Button
                key={`${variant}-${config.size}-${index}`}
                variant={variant}
                {...config}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonPage;
