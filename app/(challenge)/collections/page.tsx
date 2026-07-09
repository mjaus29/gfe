import Collections from "@/components/collections/Collections";

const getCollections = async () => {
  const res = await fetch(
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections",
  );
  const data = await res.json();
  return data.data;
};

const CollectionsPage = async () => {
  const collections = await getCollections();

  return (
    <div className="container-layout bg-layout">
      <div className="m-auto h-full">
        <Collections collections={collections} />
      </div>
    </div>
  );
};
export default CollectionsPage;
