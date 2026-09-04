import Dropdown, { type Option } from "@/components/dropdown/Dropdown";

const dropdownOptions: Option[] = [
  { value: "public", label: "Public", icon: "public" },
  { value: "unlisted", label: "Unlisted", icon: "unlisted" },
  { value: "private", label: "Private", icon: "private", disabled: true },
];

const DropdownPage = () => {
  return (
    <div className="container-layout bg-layout-plain">
      <div className="m-auto flex h-full flex-col gap-6">
        <Dropdown options={dropdownOptions} />
      </div>
    </div>
  );
};

export default DropdownPage;
