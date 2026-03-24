import ContactSection from "../components/contact/ContactSection";
import Contribution from "../components/contribution/Contribution";
import ExperienceTimeLine from "../components/experience/ExperienceTimeLine";
import ExpertiseSection from "../components/expertise/ExpertiseSection";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";
import HeroSection from "../components/hero/HeroSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="px-8 lg:px-16">
        <HeroSection />
        <Contribution />
        <ExpertiseSection />
        <ExperienceTimeLine />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
