import Pagination from "@/components/pagination/Pagination";

const PaginationPage = () => {
  return (
    <div className="container-layout bg-layout-plain">
      <div className="m-auto flex flex-col gap-6">
        <Pagination totalPages={3} />
        <Pagination totalPages={3} iconOnly />
        <Pagination totalPages={10} />
        <Pagination totalPages={10} />
      </div>
    </div>
  );
};
export default PaginationPage;
