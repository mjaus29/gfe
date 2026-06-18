import Image from "next/image";
type TestimonialCardProps = {
  image: string;
  name: string;
  username: string;
  message: string;
};

const TestimonialCard = ({
  image,
  name,
  username,
  message,
}: TestimonialCardProps) => {
  return (
    <div className="flex h-full max-w-85 flex-col gap-4 rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="object-cover"
        />

        <div className="flex flex-col gap-px">
          <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
          <span className="text-sm font-normal text-neutral-600">
            {username}
          </span>
        </div>
      </div>

      <div className="text-base font-normal text-neutral-600">
        <p>{message}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
