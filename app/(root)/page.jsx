import Allteams from "../components/Allteams/Allteams";
import AnimatedCallout from "../components/AnimatedCallout.jsx/AnimatedCallout";
import CalloutCircle from "../components/CalloutCircle/CalloutCircle";
import Collaboration from "../components/Collaboration/Collaboration";
import HeroSection from "../components/HeroSection/HeroSection";
import PerfectTeam from "../components/PerfectTeam/PerfectTeam";
import Tabs from "../components/Tabs/Tabs";
import Users from "../components/Users/Users";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Tabs />
      <Collaboration />
      <CalloutCircle />
      <PerfectTeam />
      <AnimatedCallout />
      <Allteams />
      <Users />
    </>
  );
}
