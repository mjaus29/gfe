import Hero from "@/components/hero/Hero";

const HeroPage = () => {
  return (
    <div className="container-layout bg-layout">
      <div className="mt-50 h-full">
        <Hero
          image={"/img/profilecard.png"}
          name={"Sarah Dole"}
          title={"Front End Engineer @ Microsoft"}
          bio={`I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.`}
        />
      </div>
    </div>
  );
};
export default HeroPage;
