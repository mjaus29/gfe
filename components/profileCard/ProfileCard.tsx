import Image from "next/image";
import Link from "next/link";

type ProfileCardProps = {
  image: string;
  title: string;
  name: string;
  bio: string;
};

const socials = [
  { image: "/github.svg", name: "GitHub" },
  { image: "/linkedin.svg", name: "LinkedIn" },
  { image: "/instagram.svg", name: "Instagram" },
  { image: "/x.svg", name: "X" },
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
        <Link
          href="#"
          className="flex items-center justify-center gap-1.5 rounded bg-indigo-700 px-4 py-2.5 transition hover:bg-indigo-500 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
        >
          <span className="flex items-center justify-center px-0.5 text-base font-medium text-white">
            Contact me
          </span>
        </Link>

        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href="#"
              className="flex items-center justify-center gap-2 rounded p-2 transition hover:bg-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
              aria-label={`Visit ${name}'s ${social.name} profile`}
            >
              <Image
                src={social.image}
                alt={social.name}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};
export default ProfileCard;
