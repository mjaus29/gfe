import TestimonialCard from "@/components/testimonialCard/designs/TestimonialCard";

const TestimonialCardPage = () => {
  return (
    <div className="container-layout flex min-h-screen min-w-screen justify-center bg-linear-to-b from-gray-50 to-[#d2d6db]">
      <TestimonialCard
        image={"/img/profile-thumbnail.png"}
        name={"Sarah Dole"}
        username={"@sarahdole"}
        message={`I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`}
      />
    </div>
  );
};
export default TestimonialCardPage;
