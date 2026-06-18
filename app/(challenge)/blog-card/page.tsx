import BlogCard from "@/components/blogCard/BlogCard";

const BlogCardPage = () => {
  return (
    <div className="container-layout bg-layout">
      <div className="mt-30 h-full">
        <BlogCard
          image={"/img/blogcard.jpg"}
          title={"Top 5 Living Room Inspirations"}
          badge={"Interior"}
          excerpt={`Curated vibrants colors for your living, make it pop & calm in the same time.`}
        />
      </div>
    </div>
  );
};
export default BlogCardPage;
