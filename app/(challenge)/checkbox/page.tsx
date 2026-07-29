import Checkbox from "@/components/checkbox/Checkbox";

const checkboxStates = [
  { state: "unchecked", label: "Unchecked" },
  { state: "checked", label: "Checked" },
  { state: "indeterminate", label: "Indeterminate" },
] as const;

const CheckboxPage = () => {
  return (
    <div className="container-layout bg-layout">
      <div className="m-auto flex h-full flex-col gap-6">
        {checkboxStates.map((item) => (
          <Checkbox
            key={`${item.label}-${item.state}`}
            state={item.state}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxPage;
