import Badge from "@/components/badge/Badge";

const badgeVariants = [
  "neutral",
  "danger",
  "warning",
  "success",
  "brand",
] as const;

const badgeSizes = ["sm", "md", "lg"] as const;

const BadgePage = () => {
  return (
    <div className="container-layout bg-layout">
      <div className="m-auto flex h-full flex-col gap-6">
        {badgeVariants.map((variant) => (
          <div key={variant} className="flex items-center gap-6">
            {badgeSizes.map((size) => (
              <Badge
                key={`${variant}-${size}`}
                variant={variant}
                size={size}
                label={"Label"}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgePage;
