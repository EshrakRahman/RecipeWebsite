import OurMission from "../components/AboutPageComponents/OurMission";
import OurPhilosopy from "../components/AboutPageComponents/OurPhilosopy";
import WeExit from "../components/AboutPageComponents/WeExit";
import ReadyToCookSection from "../components/ReadyToCookSection/ReadyToCookSection";
import TwoColumnsSection from "../components/Two Columns Section/TwoCloumnsSection";

function About() {
  return (
    <>
      <main className="lg:mx-25">
        <OurMission />
        <WeExit />
        <OurPhilosopy />
        <TwoColumnsSection page="about" />
        <ReadyToCookSection />
      </main>
    </>
  );
}

export default About;
