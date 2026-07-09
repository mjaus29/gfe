import Image from "next/image";
import Link from "next/link";

type CollectionsProps = {
  collections: {
    image_url: string;
    name: string;
    description: string;
    collection_id: string;
  }[];
};

const Collections = ({ collections }: CollectionsProps) => {
  return (
    <article className="flex flex-col rounded-md bg-white">
      <div className="flex flex-col gap-8 sm:px-3 sm:py-12 md:px-4 md:py-16 lg:p-24">
        <span className="text-3xl font-semibold text-neutral-900">
          Our Collections
        </span>

        <div className="mx-auto grid grid-cols-1 gap-7 md:grid-cols-2">
          {collections.map((collection, index) => (
            <Link
              key={collection.collection_id}
              href={`/collections/${collection.collection_id}`}
              className={`relative w-79.75 md:w-84.5 lg:w-148.5 ${index === 0 ? "row-span-2 h-145" : "row-span-1 h-84.25 md:h-69"}`}
            >
              <Image
                src={collection.image_url}
                alt={collection.name}
                className="rounded-lg object-cover"
                fill
                priority
              />

              <div className="absolute right-0 bottom-0 left-0 flex flex-col p-4">
                <span className="text-sm font-normal text-white">
                  {collection.name}
                </span>
                <p className="text-lg font-medium text-white">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};
export default Collections;
