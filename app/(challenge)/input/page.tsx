import { EmailIcon } from "@/components/icons/Icons";
import Input from "@/components/input/Input";

const inputConfigs = [
  {
    id: "email-1",
    label: "Email",
    type: "email",
    placeholder: "name@email.com",
    hint: "This is a hint text",
  },
  {
    id: "email-2",
    label: "Email",
    type: "email",
    placeholder: "name@email.com",
    hint: "This is a hint text",
    icon: EmailIcon,
    iconPosition: "left",
  },
  {
    id: "email-3",
    label: "Email",
    type: "email",
    placeholder: "name@email.com",
    hint: "This is a hint text",
  },
  {
    id: "email-4",
    label: "Email",
    type: "email",
    placeholder: "name@email.com",
    error: "This is an error message.",
  },
] as const;

const InputPage = () => {
  return (
    <div className="container-layout bg-white">
      <div className="mt-28 flex h-full flex-col gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-12">
          {inputConfigs.map((config, index) => (
            <Input key={`${config.id}-${index}`} {...config} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputPage;
