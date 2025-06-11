
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import UniversityPartnerships from "@/components/UniversityPartnerships";
import SocialStats from "@/components/SocialStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Hero />
      <Mission />
      <UniversityPartnerships />
      <SocialStats />
      <Footer />
    </div>
  );
};

export default Index;
