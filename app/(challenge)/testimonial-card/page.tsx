import TestimonialCard from "@/components/testimonialCard/TestimonialCard";

const TestimonialCardPage = () => {
  return (
    <div className="container-layout bg-layout">
      <div className="mt-50 h-full">
        <TestimonialCard
          image={"/img/profile-thumbnail.png"}
          name={"Sarah Dole"}
          username={"@sarahdole"}
          message={`I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`}
        />
      </div>
    </div>
  );
};
export default TestimonialCardPage;
