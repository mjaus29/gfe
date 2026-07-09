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
        <h2 className="text-3xl font-semibold text-neutral-900">
          Our Collections
        </h2>

        <div className="mx-auto grid grid-cols-1 gap-7 md:grid-cols-2">
          {collections.map((collection, index) => (
            <Link
              key={collection.collection_id}
              href={`/collections/${collection.collection_id}`}
              className={`relative w-79.75 overflow-hidden rounded-lg transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-neutral-900/40 focus-visible:outline-none md:w-84.5 lg:w-148.5 ${index === 0 ? "row-span-2 h-145" : "row-span-1 h-84.25 md:h-69"} `}
            >
              <Image
                src={collection.image_url}
                alt={collection.name}
                className="object-cover"
                fill
                priority
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col p-4">
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
