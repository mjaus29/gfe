import BlogCard from "@/components/blogCard/BlogCard";

const BlogCardPage = () => {
  return (
    <div className="container-layout flex min-h-screen min-w-screen justify-center bg-linear-to-b from-gray-50 to-[#d2d6db]">
      <BlogCard
        image={"/img/blogcard.jpg"}
        title={"Top 5 Living Room Inspirations"}
        badge={"Interior"}
        excerpt={`Curated vibrants colors for your living, make it pop & calm in the same time.`}
      />
    </div>
  );
};
export default BlogCardPage;
