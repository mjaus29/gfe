import ArrowIcon from "@/components/icons/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
type BlogCardProps = {
  image: string;
  title: string;
  badge: string;
  excerpt: string;
};

const BlogCard = ({ image, title, badge, excerpt }: BlogCardProps) => {
  return (
    <article className="mt-30 flex h-full max-w-85 flex-col rounded-lg bg-white shadow-sm">
      <Image
        src={image}
        alt={title}
        width={340}
        height={288}
        className="rounded-t-lg object-cover"
      />

      <div className="flex flex-col gap-3 px-4 py-6">
        <div className="flex flex-col gap-2">
          <span className="self-start rounded-full border border-solid border-green-200 bg-green-50 px-2 py-0.5 text-center text-sm font-normal text-green-700">
            {badge}
          </span>
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-base font-medium text-neutral-600">{excerpt}</p>

          <Link href="#" className="flex items-center gap-1.5 rounded">
            <span className="text-base font-medium text-indigo-700">
              Read More
            </span>
            <ArrowIcon width="13" height="12" className="text-indigo-700" />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
