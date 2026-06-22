import Image from "next/image";
import Button from "../button/Button";
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "../icons/Icons";

type ProfileCardProps = {
  image: string;
  title: string;
  name: string;
  bio: string;
};

const socials = [
  { href: "#", name: "GitHub", icon: GitHubIcon },
  { href: "#", name: "LinkedIn", icon: LinkedInIcon },
  { href: "#", name: "Instagram", icon: InstagramIcon },
  { href: "#", name: "X", icon: XIcon },
];

const ProfileCard = ({ image, title, name, bio }: ProfileCardProps) => {
  return (
    <article className="flex h-full w-85 flex-col gap-10 rounded-lg border border-gray-200 bg-white px-4 py-6 shadow-sm">
      <div className="flex flex-col items-center gap-6">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="object-cover"
          priority
        />

        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-center text-xl font-medium text-neutral-900">
            {name}
          </span>
          <span className="text-center text-sm font-normal text-neutral-600">
            {title}
          </span>
        </div>

        <span className="text-center text-base font-normal text-neutral-600">
          {bio}
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <Button
          href="#"
          size="md"
          variant="primary"
          text="Contact me"
          className="w-full justify-center"
        />

        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <Button
              key={social.name}
              href={social.href}
              size="2xl"
              variant="tertiary"
              icon={social.icon}
              iconOnly
              text={`Visit ${name}'s ${social.name} profile`}
              className="p-2 hover:bg-indigo-100"
            />
          ))}
        </div>
      </div>
    </article>
  );
};
export default ProfileCard;
