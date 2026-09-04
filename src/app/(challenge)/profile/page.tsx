import ProfileCard from "@/components/profileCard/ProfileCard";

const ProfileCardPage = () => {
  return (
    <div className="container-layout bg-layout">
      <div className="mt-50 h-full">
        <ProfileCard
          image={"/img/profilecard.png"}
          name={"Sarah Dole"}
          title={"Front End Engineer @ Microsoft"}
          bio={`I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.`}
        />
      </div>
    </div>
  );
};
export default ProfileCardPage;
