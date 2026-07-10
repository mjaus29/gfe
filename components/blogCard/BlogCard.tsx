import Image from "next/image";
import Badge from "../badge/Badge";
import Button from "../button/Button";
import { ArrowIcon } from "../icons/Icons";
type BlogCardProps = {
  image: string;
  title: string;
  badge: string;
  excerpt: string;
};

const BlogCard = ({ image, title, badge, excerpt }: BlogCardProps) => {
  return (
    <article className="h-full w-85 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="relative h-72 w-full">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>

      <div className="flex flex-col gap-3 px-4 py-6">
        <div className="flex flex-col gap-2">
          <Badge
            label={badge}
            variant="success"
            size="md"
            className="self-start"
          />

          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-base font-medium text-neutral-600">{excerpt}</p>

          <Button
            href="#"
            size="md"
            variant="link"
            text="Read More"
            icon={ArrowIcon}
            iconSize="sm"
            iconPosition="right"
            className="self-start"
          />
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
