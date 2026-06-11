import TestimonialCard from "@/components/testimonialCard/designs/TestimonialCard";

const TestimonialCardPage = () => {
  return (
    <div className="container-layout bg-layout mt-50">
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
